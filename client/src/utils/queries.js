import { gql } from '@apollo/client';

export const QUERY_ITEMS = gql`
  query allitems {
    items {
      _id
      title
      description
      image
      price
      stock
      size
    }
  }
`;

export const QUERY_BRAND_ITEMS = gql`
  query Query {
    brandItems {
      _id
      title
      description
      image
      price
      stock
      size
      brand
    }
  }
`;
