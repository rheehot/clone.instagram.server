import {
  prisma,
} from '../../../generated/prisma-client';

export default {
  User: {
    fullName: parent => `${parent.firstName} ${parent.lastName}`,
    isFollowing: (parent, _, {
      request,
    }) => {
      const {
        user,
      } = request;
      const {
        id: parentId,
      } = parent;
      return prisma.$exists.user({
        AND: [{
          id: parentId,
        }, {
          followers_some: {
            id: user.id,
          },
        }],
      });
    },
    isSelf: (parent, _, {
      request,
    }) => {
      const {
        user,
      } = request;
      const {
        id: parentId,
      } = parent;
      return user.id === parentId;
    },
  },
  Post: {
    isLiked: (parent, _, {
      request,
    }) => {
      const {
        user,
      } = request;
      const {
        id,
      } = parent;
      console.log(user, id);
      return true;
      // return prisma.$exists.like({
      //   AND: [{
      //     user: {
      //       id: user.id,
      //     },
      //   },
      //   {
      //     post: {
      //       id,
      //     },
      //   },
      //   ],
      // });
    },
  },
};
