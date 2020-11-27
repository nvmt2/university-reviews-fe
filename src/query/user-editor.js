import { gql } from "@apollo/client";

const EDIT_USER_PROFILE = gql`
  mutation editUserProfile(
    $idUser: ID!
    $passwordUser: String
    $username: String
  ) {
    updateAccount(
      id: $idUser
      data: { passwordUser: $passwordUser, username: $username }
    ) {
      id
      username
    }
  }
`;

export const userEditorMutation = {
  EDIT_USER_PROFILE,
};
