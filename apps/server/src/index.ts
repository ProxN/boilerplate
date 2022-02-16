import 'reflect-metadata';
import { config } from 'dotenv';
config({ path: './config' });

import express from 'express';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import expressPlayground from 'graphql-playground-middleware-express';
import helloResolver from './api/hello-resolver';
import { logger } from './lib/logger';

logger.info('Starting Application');

const Main = async () => {
  const app = express();

  const schema = await buildSchema({
    resolvers: [helloResolver],
    validate: false,
  });

  const apolloServer = new ApolloServer({
    schema,
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

  app.listen(5000, () => logger.info(`> Ready on http://localhost:${5000}`));
};

Main();
