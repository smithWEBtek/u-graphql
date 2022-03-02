import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import ApolloClient from 'apollo-boost';
// import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql/",
  // cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
