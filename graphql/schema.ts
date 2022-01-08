import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Query {
    "Query to get an array for space photos the homepage grid"
    spacePhotosForHome: [SpacePhoto!]!
  }

  "A SpacePhoto is a single Astronomy photograph"
  type SpacePhoto {
    "Optional copyright information"
    copyright: String
    "Explanation of the context of the photo"
    explanation: String!
    "hd version of the photo"
    hdurl: String
    "Title of the photo"
    title: String!
    "low quality image of the photo"
    url: String
    "date the photograph was captured"
    date: String
  }
`;

export default typeDefs;
