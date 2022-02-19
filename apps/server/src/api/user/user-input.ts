import { Field, InputType } from 'type-graphql';

import { User } from './user-model';

@InputType()
export class UpdateMeInput implements Partial<User> {
  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  avatar: string;

  @Field(() => String, { nullable: true })
  bio: string;
}
