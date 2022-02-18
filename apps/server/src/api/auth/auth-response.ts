import { Field, ObjectType } from 'type-graphql';

import { User } from '../user/user-model';

@ObjectType()
export class AuthResponse {
  @Field(() => User)
  user: User;

  @Field(() => String)
  token: string;
}
