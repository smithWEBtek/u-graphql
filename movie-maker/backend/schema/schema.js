const { buildSchema } = require('graphql');

const movieSchema = buildSchema(`
  type Query {
    movies: [Movie]
    movieById(_id:String!): Movie
    movieByName(name: String!): Movie
  }

  type Mutation {
    addMovie(name: String!, genre: String!, year: String!, imageUrl: String!): Movie
  }

  type Movie {
    name: String,
    genre: String,
    year: String,
    imageUrl: String
  }
`)

module.exports = movieSchema
