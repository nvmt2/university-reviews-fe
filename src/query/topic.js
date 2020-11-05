import { gql } from "@apollo/client";

const GET_TOPICS = gql`
  query getTopics($id: ID) {
    allTopics(where: { university: { id: $id } }) {
      id
      title
      content
      like
      tags
      date
      user {
        username
      }
      university {
        name
      }
    }
  }
`;
const CREATE_TOPIC = gql`
  mutation createNewTopic(
    $title: String
    $content: String
    $date: DateTime
    $idUser: ID!
    $idUniversity: ID!
  ) {
    createTopic(
      data: {
        title: $title
        content: $content
        date: $date
        user: { connect: { id: $idUser } }
        university: { connect: { id: $idUniversity } }
      }
    ) {
      id
      content
    }
  }
`;
const UPDATE_TOPIC = gql`
  mutation updateTopic(
    $id: ID!
    $title: String
    $content: String
    $date: DateTime
  ) {
    updateTopic(
      id: $id
      data: { title: $title, content: $content, date: $date }
    ) {
      id
    }
  }
`;
const DELTETE_TOPIC = gql`
  mutation deleteTopic($id: ID!) {
    deleteTopic(id: $id) {
      content
    }
  }
`;

export const topicQuery = {
  GET_TOPICS,
};
export const topicMutation = {
  CREATE_TOPIC,
  UPDATE_TOPIC,
  DELTETE_TOPIC,
};
