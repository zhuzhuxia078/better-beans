import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'https://better-beans.vercel.app/api/graphql',
  cache: new InMemoryCache(),
});

export default apolloClient;
