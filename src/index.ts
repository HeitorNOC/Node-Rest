import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './delivery/schemas';
import { resolvers } from './delivery/resolvers';
import mongoose from 'mongoose';

async function startServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  server.applyMiddleware({ app });

  await mongoose.connect('mongodb+srv://root:root@cluster0.w0olmqi.mongodb.net/?retryWrites=true&w=majority');

  app.listen({ port: 3000 }, () =>
    console.log(`Server ready at http://localhost:3000${server.graphqlPath}`)
  );
}

startServer();
