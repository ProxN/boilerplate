import 'reflect-metadata';
import 'dotenv/config';

import express, { NextFunction } from 'express';
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';
import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';
import expressPlayground from 'graphql-playground-middleware-express';
import { ApolloServer } from 'apollo-server-express';
import expressJWT from 'express-jwt';
import morgan from 'morgan';

import { PORT, JWT_CONFIG, IS_PRODUCTION, SENTRY_DSN } from './lib/config';
import { TokenValidator } from './lib/token-validator';
import { logger } from './lib/logger';
import { connect, prisma } from './lib/prisma';
import { authChecker } from './lib/auth-checker';
import resolvers from './lib/resolvers';
import prismaHooks from './lib/hooks';
import { loadUser } from './lib/load-user';

logger.info('Starting Application');

const Main = async () => {
  // init
  const app = express()
    .use(Sentry.Handlers.requestHandler())
    .use(Sentry.Handlers.tracingHandler())
    .enable('trust proxy')
    .use(
      morgan('dev', {
        skip: (req) => req.method === 'options',
        stream: { write: (message) => logger.info(message) },
      })
    );

  // Sentry
  if (IS_PRODUCTION) {
    Sentry.init({
      dsn: SENTRY_DSN,
      integrations: [
        // enable HTTP calls tracing
        new Sentry.Integrations.Http({ tracing: true }),
        // enable Express.js middleware tracing
        new Tracing.Integrations.Express({ app }),
      ],
      // enabled: true,
      tracesSampleRate: 1.0,
    });
  }

  // Connect to Database
  await connect();
  prismaHooks();

  // Auth
  app.use(expressJWT(JWT_CONFIG));
  app.use((err: any, _: any, __: any, next: NextFunction) => {
    if (err.name === 'UnauthorizedError') next();
  });
  app.use(loadUser);

  // Apollo setup
  const schema = await buildSchema({
    container: Container,
    resolvers: resolvers(),
    validate: true,
    globalMiddlewares: [TokenValidator],
    authChecker,
  });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }) => ({
      req,
      res,
      prisma,
    }),
  });

  app.get(
    '/graphql',
    expressPlayground({
      endpoint: '/graphql',
      subscriptionEndpoint: `/graphql`,
    })
  );

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, cors: false });
  app.use(Sentry.Handlers.errorHandler());

  app.listen(PORT, () => logger.info(`> Ready on http://localhost:${PORT}`));
};

Main().catch((error) => {
  Sentry.captureException(error);
  logger.error(error);
  process.exit(1);
});
