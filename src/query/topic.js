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

const topicQuery = {
  GET_TOPICS,
};

export default topicQuery;
