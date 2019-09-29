import { prisma } from '../../../../generated/prisma-client';
import { cleanNullArgs } from '../../../utils';

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const notNull = cleanNullArgs(args);
      const exists = await prisma.$exists.user({
        OR: [{ username: notNull.username }, { email: notNull.email }],
      });
      if (exists) {
        throw Error('This username / email is already taken');
      }
      await prisma.createUser({
        ...notNull,
      });
      return true;
    },
  },
};
