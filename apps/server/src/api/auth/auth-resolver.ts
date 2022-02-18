import { Arg, Authorized, Mutation, Query, Resolver } from 'type-graphql';
import { Inject, Service } from 'typedi';

import { LoginInput, RegisterInput } from './auth-input';
import { AuthResponse } from './auth-response';
import { UserService } from './auth-service';
import { User } from '../user/user-model';

@Service()
@Resolver()
class AuthResolver {
  // Service
  @Inject(() => UserService)
  userService!: UserService;

  // Register
  @Mutation(() => AuthResponse)
  async register(
    @Arg('data', () => RegisterInput) data: RegisterInput
  ): Promise<AuthResponse> {
    const user = (await this.userService.register(data)) as User;
    const { token } = this.userService.createAuthTokens(user.id);

    return { user, token };
  }

  // Login
  @Mutation(() => AuthResponse)
  async login(
    @Arg('data', () => LoginInput) data: LoginInput
  ): Promise<AuthResponse> {
    const user = (await this.userService.login(data)) as User;
    const { token } = this.userService.createAuthTokens(user.id);

    return { user, token };
  }

  @Authorized(['ADMIN'])
  @Query(() => String, { nullable: true })
  me() {
    return 'hello world';
  }
}

export default AuthResolver;
