import { gql } from "@apollo/client";

const GET_ACCOUNT = gql`
  query getAccount($email: String, $passwordUser: String) {
    allAccounts(
      where: { email: $email, AND: { passwordUser: $passwordUser } }
    ) {
      id
      username
    }
  }
`;

const loginQuery = {
  GET_ACCOUNT,
};

export default loginQuery;
