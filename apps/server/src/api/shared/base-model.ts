import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export abstract class BaseModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  created_at: Date;

  @Field(() => String)
  updated_at: Date;
}
