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

const CommentMutation = {
  CREATE_COMMENT,
};
export default CommentMutation;
