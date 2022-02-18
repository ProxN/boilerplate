import * as bcrypt from 'bcryptjs';

import { prisma } from '../../lib/prisma';

prisma.$use(async (params, next) => {
  if (params.model !== 'User') return await next(params);
  if (!['create', 'update'].includes(params.action)) return await next(params);

  if (params.args.data.email) {
    params.args.data.email = params.args.data.email.toLowerCase();
  }

  if (params.args.data.password) {
    params.args.data.password = await bcrypt.hash(
      params.args.data.password,
      12
    );
  }

  return await next(params);
});
