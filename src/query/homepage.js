import { gql } from "@apollo/client";

const GET_ALL_UNIVERSITY = gql`
  query getUniversity($first: Int, $skip: Int, $zone: String) {
    allUniversities(
      first: $first
      skip: $skip
      where: { zone_contains: $zone }
    ) {
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
