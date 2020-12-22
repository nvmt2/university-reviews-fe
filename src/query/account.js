import { gql } from "@apollo/client";

const GET_ACCOUNT = gql`
query getAccount($id: ID!){
    Account(where: {
      id: $id
    })
    {
      username
      avatar{
        publicUrl
      }
    }
  }
`
export const accountQuery = {
    GET_ACCOUNT
};
