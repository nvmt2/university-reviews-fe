import { gql } from "@apollo/client";

const GET_INTRODUCE = gql`
  query getIntroduceUniversity($id: ID) {
    allUniversities(where: { id: $id }) {
      detailUniversity {
        introduce
      }
    }
  }
`;
const GET_MAJOR = gql`
  query getMajorUniversity($id: ID) {
    allUniversities(where: { id: $id }) {
      detailUniversity {
        majors {
          name
          majors {
            name
            subject
          }
        }
      }
    }
  }
`;

const GET_PARTNER = gql`
  query getPartnerUniversity($id: ID) {
    allUniversities(where: { id: $id }) {
      detailUniversity {
        partner {
          name
          state
          description
          link
        }
      }
    }
  }
`;
const GET_GALLERY = gql`
  query getGalleryUniversity($id: ID) {
    allUniversities(where: { id: $id }) {
      detailUniversity {
        galeries {
          name
          image {
            publicUrl
          }
        }
      }
    }
  }
`;
const GET_UNIVERSITY = gql`
  query getUniversity($id: ID!) {
    University(where: { id: $id }) {
      name
      email
      code
      address
      logo {
        publicUrlTransformed(transformation: { width: "40", height: "40" })
      }
    }
  }
`;
const detailUniversityQuery = {
  GET_INTRODUCE,
  GET_MAJOR,
  GET_PARTNER,
  GET_GALLERY,
  GET_UNIVERSITY,
};
export default detailUniversityQuery;
