import { gql } from '@apollo/client';

const GET_ALL_RATINGS_BY_UNIVERSITY = gql`
  query getAllRatingsByUni($idUni: ID!) {
    allRatings(where: { university: { id: $idUni } }) {
      qualityOfEducation
      infrastructure
      fee
      activities
      jobOpportunities
    }
  }
`;
const GET_RATING_BY_AUTHOR = gql`
  query getRatingByAuthor($idUser: ID!, $idUni: ID!) {
    allRatings(
      where: { user: { id: $idUser }, AND: { university: { id: $idUni } } }
    ) {
      qualityOfEducation
      infrastructure
      fee
      activities
      jobOpportunities
    }
  }
`;
const GET_LESSER_EQUAL_RATING = gql`
  query getRatingLesserAndEqual($dateParam: DateTime, $idUni: ID!) {
    allRatings(where: { university: { id: $idUni }, date_lte: $dateParam }) {
      qualityOfEducation
      infrastructure
      fee
      activities
      jobOpportunities
    }
  }
`;
const CREATE_RATING = gql`
  mutation createRating(
    $idUser: ID!
    $idUni: ID!
    $qualityOfEducation: Int
    $infrastructure: Int
    $fee: Int
    $activities: Int
    $jobOpportunities: Int
    $dateParam: DateTime
  ) {
    createRating(
      data: {
        qualityOfEducation: $qualityOfEducation
        infrastructure: $infrastructure
        fee: $fee
        activities: $activities
        jobOpportunities: $jobOpportunities
        date: $dateParam
        user: { connect: { id: $idUser } }
        university: { connect: { id: $idUni } }
      }
    ) {
      qualityOfEducation
      infrastructure
      fee
      activities
      jobOpportunities
    }
  }
`;

export const ratingQuery = {
  GET_ALL_RATINGS_BY_UNIVERSITY,
  GET_RATING_BY_AUTHOR,
  GET_LESSER_EQUAL_RATING,
};
export const ratingMutation = { CREATE_RATING };
