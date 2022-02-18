import { PrismaClient } from '@prisma/client';
import { logger } from './logger';

export const prisma = new PrismaClient({ log: ['query', 'warn', 'error'] });

export const connect = async () => {
  await prisma
    .$connect()
    .then(() => logger.info('DB CONNECTED SUCCESSFULY'))
    .catch((err) => {
      logger.error(err);
    });
};
