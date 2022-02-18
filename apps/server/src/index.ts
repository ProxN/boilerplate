import 'reflect-metadata';
import 'dotenv/config';

import express, { NextFunction } from 'express';
import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';
import expressPlayground from 'graphql-playground-middleware-express';
import { ApolloServer } from 'apollo-server-express';
import expressJWT from 'express-jwt';
import morgan from 'morgan';

import { PORT, JWT_CONFIG } from './lib/config';
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
    .enable('trust proxy')
    .use(
      morgan('dev', {
        skip: (req) => req.method === 'options',
        stream: { write: (message) => logger.info(message) },
      })
    );

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

  app.listen(PORT, () => logger.info(`> Ready on http://localhost:${PORT}`));
};

Main();
