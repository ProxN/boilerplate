import * as jwt from 'jsonwebtoken';

import { JWT_AUTH_SECRET } from './config';

type Payload = Record<string, unknown>;
type Options = jwt.SignOptions;

export const decodeToken = <T>(token: string): T => {
  return jwt.decode(token) as T;
};

export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret);
};

export const createAuthToken = (payload: Payload, options?: Options) => {
  const token = jwt.sign(payload, JWT_AUTH_SECRET, {
    issuer: 'server',
    audience: ['web'],
    expiresIn: '1 min',
    ...options,
  });
  return token;
};

export const createResetToken = (
  payload: Payload,
  secret: string,
  options?: Options
) => {
  const token = jwt.sign(payload, secret, {
    issuer: 'server',
    audience: ['web'],
    expiresIn: '10 min',
    ...options,
  });
  return token;
};
