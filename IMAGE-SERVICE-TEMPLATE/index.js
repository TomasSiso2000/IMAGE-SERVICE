const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./src/graphql/typeDefs/schema');
const resolvers = require('./src/graphql/resolvers/imageResolvers');
require('dotenv').config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Servidor listo en ${url}`);
});
