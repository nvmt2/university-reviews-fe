import { gql } from "@apollo/client";

const CREATE_COMMENT = gql`
  mutation createNewComment($content: String, $idUser: ID!, $idTopic: ID!) {
    createComment(
      data: {
        content: $content
        user: { connect: { id: $idUser } }
        topic: { connect: { id: $idTopic } }
      }
    ) {
      content
    }
  }
`;
const REMOVE_COMMENT = gql`
  mutation removeComment($id: ID!) {
    deleteComment(id: $id) {
      content
    }
  }
`;
const GET_ALL_COMMENT = gql`
  query($id: ID) {
    allComments(where: { topic: { id: $id } }) {
      id
      content
      user {
        username
        id
      }
    }
  }
`;
export const commentMutation = {
  CREATE_COMMENT,
  REMOVE_COMMENT,
};
export const commentQuery = {
  GET_ALL_COMMENT,
};
