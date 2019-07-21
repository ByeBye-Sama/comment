import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from "apollo-link-context";

import { App } from './App';

const AUTH_TOKEN = 'auth-token';

const httpLink = createHttpLink({
  uri: 'https://comment-server-test.herokuapp.com/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);

  if (!token) {
    return {
      headers
    };
  }

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const Root = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <App />
    </ApolloHooksProvider>
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
