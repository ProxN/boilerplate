// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { User } from '../../src/api/user/user-model';

type NewTypeUser = User;
type JwtUser = { id: string };

declare global {
  namespace Express {
    interface Request {
      user: JwtUser;
      currentUser: NewTypeUser;
    }
  }
}
