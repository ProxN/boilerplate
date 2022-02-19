import { Arg, Authorized, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';

import { User } from './user-model';
import { UpdateMeInput } from './user-input';
import { CurrentUser } from '../shared/current-user';
import { prisma } from '../../lib/prisma';

@Service()
@Resolver()
class UserResolver {
  // Me
  @Authorized()
  @Query(() => User)
  async me(@CurrentUser() user: User) {
    return user;
  }

  // Update Me
  @Authorized()
  @Mutation(() => User)
  async updateMe(
    @Arg('data', () => UpdateMeInput) data: UpdateMeInput,
    @CurrentUser() user: User
  ) {
    return await prisma.user.update({
      where: { id: user.id },
      data,
    });
  }
}

export default UserResolver;
