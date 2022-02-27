if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { graphqlHTTP } = require('express-graphql')
const movieSchema = require('./schema/schema')
const resolvers = require('./resolver/resolver')


mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.y2yfx.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('mongoDB connected!');
  })
  .catch((err) => {
    console.log('err: ', err);
  })

app.use('/graphql', graphqlHTTP({
  schema: movieSchema,
  graphiql: true,
  rootValue: resolvers,
}))

app.get('/', (req, res) => {
  res.send('Hello from app.js backend')
})

app.listen(4000, () => {
  console.log('Server listening on port 4000');
})
