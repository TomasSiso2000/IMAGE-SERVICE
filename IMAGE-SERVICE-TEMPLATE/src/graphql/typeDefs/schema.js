const { gql } = require('apollo-server');

const typeDefs = gql`
  type ImageUploadResponse {
    url: String!
  }

  type Query {
    _: Boolean
  }

  type Mutation {
    uploadImage(base64Image: String!): ImageUploadResponse!
    deleteImage(url: String!): Boolean!
  }
`;

module.exports = typeDefs;
