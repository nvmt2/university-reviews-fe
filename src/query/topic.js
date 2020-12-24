import { gql } from "@apollo/client";

const GET_ALL_TOPICS = gql`
  query getAllTopics($id: ID, $tag: String) {
    allTopics(where: { university: { id: $id }, tags: $tag }) {
      id
      title
      content
      like
      unlike
      tags
      date
      user {
        username
        avatar {
          publicUrl
        }
      }
      university {
        name
      }
    }
  }
`;
const GET_TOPIC = gql`
  query getTopic($id: ID!) {
    Topic(where: { id: $id }) {
      title
      content
      tags
      date
      like
      unlike
      user {
        id
        username
        avatar {
          publicUrl
        }
      }
    }
  }
`;
const GET_TAGS = gql`
  query getAllOfTags($idUniversity: ID) {
    allTopics(where: { university: { id: $idUniversity } }) {
      tags
    }
  }
`;
const CREATE_TOPIC = gql`
  mutation createNewTopic(
    $title: String
    $content: String
    $date: DateTime
    $tags: String
    $idUser: ID!
    $idUniversity: ID!
  ) {
    createTopic(
      data: {
        title: $title
        content: $content
        date: $date
        tags: $tags
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
    $tags: String
  ) {
    updateTopic(
      id: $id
      data: { title: $title, content: $content, date: $date, tags: $tags }
    ) {
      id
    }
  }
`;
const DELTETE_TOPIC = gql`
  mutation deleteTopic($id: ID!) {
    deleteTopic(id: $id) {
      content
      university {
        id
      }
    }
  }
`;

export const topicQuery = {
  GET_ALL_TOPICS,
  GET_TOPIC,
  GET_TAGS,
};
export const topicMutation = {
  CREATE_TOPIC,
  UPDATE_TOPIC,
  DELTETE_TOPIC,
};
