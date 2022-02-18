import { NextFunction, Request, Response } from 'express';
import { prisma } from './prisma';

export const loadUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) return next();
  const { id } = req.user as { id: string };
  const user = await prisma.user.findUnique({ where: { id } });
  if (user) req.currentUser = user;
  return next();
};
