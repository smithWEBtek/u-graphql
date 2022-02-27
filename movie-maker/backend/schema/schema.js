const { buildSchema } = require('graphql');

const movieSchema = buildSchema(`
  type Query {
    movies: [Movie]
  }

  type Movie {
    name: String,
    genre: String,
    year: String,
    imageUrl: String
  }
`)

module.exports = movieSchema
