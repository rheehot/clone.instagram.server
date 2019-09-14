/* eslint-disable import/prefer-default-export */
export const COMMENT_FRAGMENT = `
fragment CommentParts on Comment {
  id
  text
  user
  {
    username
  }
}`;
