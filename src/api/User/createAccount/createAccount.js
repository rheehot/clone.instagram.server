import {
  prisma,
} from '../../../../generated/prisma-client';
import {
  cleanNullArgs,
} from '../../../utils';

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const notNull = cleanNullArgs(args);
      const user = await prisma.createUser({
        ...notNull,
      });
      return user;
    },
  },
};
