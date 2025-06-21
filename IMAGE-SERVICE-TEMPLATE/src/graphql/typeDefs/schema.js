const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Upload


  type ImageUploadResponse {
  url: String!
}

  type Query {
    _: Boolean
  }

  type Mutation {
     uploadImage(file: Upload!): ImageUploadResponse!
    deleteImage(url: String!): Boolean!
  }
`;


module.exports = typeDefs;
