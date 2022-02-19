import { UserInputError } from 'apollo-server-express';
import * as bcrypt from 'bcryptjs';
import { Service } from 'typedi';

import { LoginInput, RegisterInput, ResetPasswordInput } from './auth-input';
import { prisma } from '../../lib/prisma';
import * as jwt from '../../lib/jwt';

@Service()
export class AuthService {
  // Register
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

  // Login
  async login(data: LoginInput) {
    const user = await prisma.user.findUnique({ where: { email: data.email } });

    if (!user || !(user && bcrypt.compare(data.password, user.password))) {
      throw new UserInputError('Email or Password is incorrect!');
    }
    return user;
  }

  // Auth Token
  createAuthTokens = (id: string) => {
    const token = jwt.createAuthToken({ id });
    return { token };
  };

  // Reset Token
  createResetToken = (id: string, password: string) => {
    const token = jwt.createResetToken({ id }, password);
    return { token };
  };

  // Reset Password
  async resetPassword(data: ResetPasswordInput) {
    const { password, token } = data;
    const { id } = jwt.decodeToken<{ id: string }>(token);
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) return false;
    jwt.verifyToken(token, user.password);
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { password },
    });
    return updatedUser;
  }
}
