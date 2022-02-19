import { IsNotEmpty, IsEmail, Length } from 'class-validator';
import { InputType, Field, ArgsType } from 'type-graphql';

import { User } from '../user/user-model';

@InputType()
export class LoginInput implements Partial<User> {
  @IsNotEmpty()
  @IsEmail()
  @Field(() => String)
  email: string;

  @IsNotEmpty()
  @Length(8)
  @Field(() => String)
  password: string;
}

@InputType()
export class RegisterInput extends LoginInput implements Partial<User> {
  @IsNotEmpty()
  @Field(() => String)
  name: string;
}

@ArgsType()
export class ForgotPasswordArgs {
  @IsEmail()
  @Field(() => String)
  email: string;
}

@InputType()
export class ResetPasswordInput {
  @Length(8)
  @Field(() => String)
  password: string;

  @Field(() => String)
  token: string;
}
