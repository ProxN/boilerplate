import { UserInputError } from 'apollo-server-express';
import * as bcrypt from 'bcryptjs';
import { Service } from 'typedi';

import { LoginInput, RegisterInput } from './auth-input';
import { prisma } from '../../lib/prisma';
import { createAuthToken } from '../../lib/jwt';

@Service()
export class UserService {
  async register(data: RegisterInput) {
    let user;
    try {
      const { email, name, password } = data;
      user = await prisma.user.create({
        data: {
          email,
          name,
          password,
        },
      });
    } catch (error: any) {
      if (error.code === 'P2002') {
        throw new UserInputError(
          'there is already a user with this email address'
        );
      }
    }

    return user;
  }

  async login(data: LoginInput) {
    const user = await prisma.user.findUnique({ where: { email: data.email } });

    if (!user || !(user && bcrypt.compare(data.password, user.password))) {
      throw new UserInputError('Email or Password is incorrect!');
    }
    return user;
  }

  createAuthTokens = (id: string) => {
    const token = createAuthToken({ id });

    return { token };
  };
}
