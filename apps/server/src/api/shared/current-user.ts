import { createParamDecorator } from 'type-graphql';

import { Context } from '../../types/context';

export const CurrentUser = () => {
  return createParamDecorator<Context>(async ({ context }) => {
    return context.req.currentUser;
  });
};
