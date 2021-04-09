// graphQL
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { API_CMS } from 'apollo/constance';

export const apolloClient = new ApolloClient({
  uri: API_CMS,
  cache: new InMemoryCache(),
});
