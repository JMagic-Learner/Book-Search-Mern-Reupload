const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID!
    authors: [String]
    description: String
    bookID: String
    image: String
    link: String
    title: String
  }

  type User {
    _id: ID!
    username: String
    bookCount: Int
    email: String
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

input bookInput {
    authors: [String]
    description: String
    title: String
    bookId: String
    image: String
    link: String
  }

  type Query {
    me: User
  }

  type Mutation {
    login: (email: String!, password: String!): Auth
    addUser: (username: String!, email: String!, password: String!): Auth
    saveBook: (input: bookInput!): User
    removeBook: (bookId: ID!): User
  }

`;

module.exports = typeDefs;
