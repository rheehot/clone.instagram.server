import { prisma } from '../../../../generated/prisma-client';
import { cleanNullArgs } from '../../../utils';

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const notNull = cleanNullArgs(args);
      await prisma.createUser({
        ...notNull,
      });
      return true;
    },
  },
};
