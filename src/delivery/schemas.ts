import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
  }

  input updateUser {
    name: String!
    email: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
    updateUser(id: String!, userToUpdate: updateUser!): User!
    deleteUser(id: String!): User!
  }
`;
