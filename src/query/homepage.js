import { gql } from "@apollo/client";

const GET_ALL_UNIVERSITY = gql`
  query getUniversity(
    $first: Int
    $skip: Int
    $zone: String
    $name_major: String
    $nameUniversity: String
  ) {
    allUniversities(
      first: $first
      skip: $skip
      where: {
        name_contains: $nameUniversity
        zone_contains: $zone
        detailUniversity: { majors_some: { name_contains: $name_major } }
      }
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
