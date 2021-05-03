import { gql } from '@apollo/client';

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
const ADD_FAVORITE_UNI = gql`
  mutation addFavoriteUni($idUni: ID!, $idUser: ID!) {
    updateAccount(
      id: $idUser
      data: { favouriteUniversity: { connect: { id: $idUni } } }
    ) {
      favouriteUniversity {
        name
      }
    }
  }
`;
const REMOVE_FAVORITE_UNI = gql`
  mutation removeFavoriteUni($idUni: ID!, $idUser: ID!) {
    updateAccount(
      id: $idUser
      data: { favouriteUniversity: { disconnect: { id: $idUni } } }
    ) {
      favouriteUniversity {
        name
      }
    }
  }
`;
export const userProfileQueries = {
  GET_PERONAL_TOPIC,
  GET_FAVOURITE_UNIVERSITY,
};
export const userProfileMutation = {
  ADD_FAVORITE_UNI,
  REMOVE_FAVORITE_UNI,
};
