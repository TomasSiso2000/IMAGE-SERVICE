const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { graphqlUploadExpress } = require('graphql-upload');
const path = require('path');
const typeDefs = require('./src/graphql/typeDefs/schema'); 
const resolvers = require('./src/graphql/resolvers/imageResolvers'); 
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();
app.use('/uploads', express.static(path.join(__dirname, 'temp')));
app.use(graphqlUploadExpress());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log('Servidor GraphQL en http://localhost:' + PORT + '/graphql');
});
