import { ApolloClient, InMemoryCache } from '@apollo/client';

//Create and export an instance of apolloClient
const apolloClient = new ApolloClient({
  uri: `/api/graphql`,
  cache: new InMemoryCache(),
});

export default apolloClient;
