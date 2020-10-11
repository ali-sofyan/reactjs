import {ApolloClient, InMemoryCache} from '@apollo/client';
import { resolvers, typeDefs, fields } from "./src/apollo/resolver";
export const cache = new InMemoryCache(fields);

export const client = new ApolloClient({
  uri: 'https://swiftpwa-be.testingnow.me/graphql',
  cache: new InMemoryCache(fields),
  typeDefs
});
