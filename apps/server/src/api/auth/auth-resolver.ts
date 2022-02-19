import { Arg, Args, Mutation, Resolver } from 'type-graphql';
import { Inject, Service } from 'typedi';

import {
  ForgotPasswordArgs,
  LoginInput,
  RegisterInput,
  ResetPasswordInput,
} from './auth-input';
import { AuthResponse } from './auth-response';
import { AuthService } from './auth-service';
import { AuthMailer } from './auth-mailer';
import { User } from '../user/user-model';
import { prisma } from '../../lib/prisma';

@Service()
@Resolver()
class AuthResolver {
  // Service
  @Inject(() => AuthService)
  authService: AuthService;
  @Inject(() => AuthMailer)
  authMailer: AuthMailer;

  // Register
  @Mutation(() => AuthResponse)
  async register(
    @Arg('data', () => RegisterInput) data: RegisterInput
  ): Promise<AuthResponse> {
    const user = (await this.authService.register(data)) as User;
    const { token } = this.authService.createAuthTokens(user.id);

    return { user, token };
  }

  // Login
  @Mutation(() => AuthResponse)
  async login(
    @Arg('data', () => LoginInput) data: LoginInput
  ): Promise<AuthResponse> {
    const user = (await this.authService.login(data)) as User;
    const { token } = this.authService.createAuthTokens(user.id);

    return { user, token };
  }

  // Forgot Password
  @Mutation(() => Boolean)
  async forgotPassword(
    @Args(() => ForgotPasswordArgs) { email }: ForgotPasswordArgs
  ) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return false;
    const { token } = this.authService.createResetToken(user.id, user.password);
    await this.authMailer.sendResetPassword(user.email, token);
    return true;
  }

  // Reset Password
  @Mutation(() => Boolean)
  async resetPassword(
    @Arg('data', () => ResetPasswordInput) data: ResetPasswordInput
  ) {
    // TODO: return user and tokens
    await this.authService.resetPassword(data);
    return true;
  }
}

export default AuthResolver;
