const { gql } = require('apollo-server-express');
//Defenitions of types 
//representation of one element in db
const typeDefs = gql `

type Jacket {
    title: String!
    description: String
    image: String
    price: Int

}

type Query {
    jacket: [Jacket]
}

`
//query things that you would like to expose through thr API 
module.exports = typeDefs;