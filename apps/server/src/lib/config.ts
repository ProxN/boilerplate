import { Options } from 'express-jwt';

export const {
  NODE_ENV = 'development',
  PORT = 5000,
  WEB_URL = '',
  DATABASE_URL = '',
  REDIS_URL = '',
  JWT_AUTH_SECRET = 'JWT_AUTH_SECRET',
  JWT_REFRESH_SECRET = 'JWT_REFRESH_SECRET',
} = process.env;

export const IS_PRODUCTION = NODE_ENV === 'production';

export const JWT_CONFIG: Options = {
  secret: JWT_AUTH_SECRET,
  credentialsRequired: false,
  algorithms: ['HS256'],
};
