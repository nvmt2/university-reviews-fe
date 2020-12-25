import { gql } from "@apollo/client";

const GET_PERONAL_TOPIC = gql`
  query getPersonnalTopic($id: ID!) {
    allTopics(where: { user: { id: $id } }) {
      user {
        username
      }
      like
      unlike
      id
      title
      date
      content
      tags
    }
  }
`;
const GET_FAVOURITE_UNIVERSITY = gql`
  query getFavouriteUniversity($idUser: ID!) {
    Account(where: { id: $idUser }) {
      favouriteUniversity {
        id
        logo {
          publicUrl
        }
        name
        address
        introduce
      }
    }
  }
`;
export const userProfileQueries = {
  GET_PERONAL_TOPIC,
  GET_FAVOURITE_UNIVERSITY,
};
