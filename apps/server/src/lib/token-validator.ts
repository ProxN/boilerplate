import { MiddlewareFn } from 'type-graphql';
import { AuthenticationError } from 'apollo-server-express';
import * as jwt from 'jsonwebtoken';

import { JWT_AUTH_SECRET } from './config';
import { Context } from '../types/context';

const fields = ['login'];

export const TokenValidator: MiddlewareFn<Context> = async (ctx, next) => {
  const {
    info,
    context: { req },
  } = ctx;
  if (!req.headers.authorization || fields.includes(info.fieldName))
    return await next();
  try {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, JWT_AUTH_SECRET);
  } catch (error) {
    throw new AuthenticationError('Token is invalid or has expired.');
  }
  return await next();
};
