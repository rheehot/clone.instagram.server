import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    me: async (_, __, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      // eslint-disable-next-line no-return-await
      return await prisma.user({ id: user.id });
    },
  },
};
