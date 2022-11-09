const { gql } = require('apollo-server-express');
//Defenitions of types 
//representation of one element in db
const typeDefs = gql `

type Jacket {
    _id: ID
    title: String!
    description: String
    image: String
    price: Float
    quantity: Int

}
type Order {
    _id: ID
    purchaseDate: String
    jacket: [Jacket]
  }

 type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }
  type Auth {
    token: ID
    user: User
  }

  type Query {
    
    jacket(jacket: ID, name: String): [Jacket]
    jacket(_id: ID!): Jacket
    user: User
    users : [User]
    order(_id: ID!): Order
    checkout(jacket: [ID]!): Checkout
  }

  input newInfo {
    name: String
    description: String
    quantity: Int
    price: Float
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(jacket: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateJacket(_id: ID!, quantity: Int!): Jacket
    login(email: String!, password: String!): Auth
    deleteJacket(_id: String!): Jacket
    editJackett(_id: String!, JackettInfo: newInfo!):Jacket
  }
`;
//query things that you would like to expose through thr API 
module.exports = typeDefs;