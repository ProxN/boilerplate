import { AuthChecker } from 'type-graphql';
import { Context } from '../types/context';

export const authChecker: AuthChecker<Context> = ({ context }, roles) => {
  const { req } = context;

  if (!req.currentUser) return false;
  if (roles.length === 0 && req.currentUser) return true;
  if (req.currentUser && !roles.includes(req.currentUser.role)) return false;

  return true;
};
