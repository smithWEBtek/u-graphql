if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql');


mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.y2yfx.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  // useCreateIndex: true,  // https://www.mongodb.com/community/forums/t/option-usecreateindex-is-not-supported/123048
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('mongoDB connected!');
  })
  .catch((err) => {
    console.log('err: ', err);
  })

const schema = buildSchema(`
  type Query {
    name: String
  }
`)

const rootValue = {
  name: () => {
    return 'Hello'
  }
}

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
  rootValue,
}))

app.get('/', (req, res) => {
  res.send('Hello from app.js backend')
})

app.listen(4000, () => {
  console.log('Server listening on port 4000');
})
