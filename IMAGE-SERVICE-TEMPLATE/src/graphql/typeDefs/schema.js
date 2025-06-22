const { gql } = require('apollo-server');

const typeDefs = gql`
  type ImageUploadResponse {
    url: String!
  }

  type Query {
    _: Boolean
  }

  type Mutation {
    uploadImageBase64(base64Image: String!): ImageUploadResponse!
    deleteImage(url: String!): Boolean!
  }
`;

module.exports = typeDefs;
