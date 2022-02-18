import * as Prisma from '@prisma/client';
import { Field, ObjectType } from 'type-graphql';

import { Role } from '@generated';
import { BaseModel } from '../shared/base-model';

@ObjectType()
export class User extends BaseModel {
  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  password: string;

  @Field(() => String, { nullable: true })
  avatar: string | null;

  @Field(() => String, { nullable: true })
  bio: string | null;

  @Field(() => Role)
  role: Prisma.Role;
}
