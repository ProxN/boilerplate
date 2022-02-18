import * as jwt from 'jsonwebtoken';

import { JWT_AUTH_SECRET } from './config';

type Payload = Record<string, unknown>;

export const createAuthToken = (
  payload: Payload,
  options?: jwt.SignOptions
) => {
  const token = jwt.sign(payload, JWT_AUTH_SECRET, {
    issuer: 'server',
    audience: ['web'],
    expiresIn: '1 min',
    ...options,
  });
  return token;
};
