import { gql, makeVar } from "@apollo/client";

export const cartItemsVar = makeVar([]);

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
    name: String!
  }
`;

export const fields = {
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read() {
            return cartItemsVar();
          },
        }
      },
    },
  },
};