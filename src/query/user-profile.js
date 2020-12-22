import { gql } from "@apollo/client";

const GET_PERONAL_TOPIC = gql`
query getPersonnalTopic($id: ID!){
    allTopics(where:{
      user:{
        id: $id
      }
    }){
      user{
        username
      }
      id
      title
      date
      content
      tags
    }
  }
`
export const userProfileQueries = {
    GET_PERONAL_TOPIC
}
