import { Options } from 'express-jwt';

export const {
  NODE_ENV = 'development',
  PORT = 5000,
  DATABASE_URL = '',
  REDIS_URL = '',
  JWT_AUTH_SECRET = 'JWT_AUTH_SECRET',
  JWT_REFRESH_SECRET = 'JWT_REFRESH_SECRET',
  SENDGRID_API_KEY = 'SENDGRID_API_KEY',
  MAIL_HOST = 'localhost',
  MAIL_USER = 'MAIL_USER',
  MAIL_PASS = 'MAIL_PASS',
  WEB_URL = 'http://localhost:3000',
} = process.env;

export const IS_PRODUCTION = NODE_ENV === 'production';

export const JWT_CONFIG: Options = {
  secret: JWT_AUTH_SECRET,
  credentialsRequired: false,
  algorithms: ['HS256'],
};

export const EMAIL_OPTIONS = {
  port: 587,
  host: process.env.MAIL_HOST,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
};
