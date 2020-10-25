import { gql } from "@apollo/client";

const GET_ALL_UNIVERSITY = gql`
  query getUniversity($first: Int, $skip: Int) {
    allUniversities(first: $first, skip: $skip) {
      id
      name
      code
      address
      email
      zone
      introduce
      logo {
        publicUrl
      }
    }
  }
`;

const homepageQueries = {
  GET_ALL_UNIVERSITY,
};

export default homepageQueries;
