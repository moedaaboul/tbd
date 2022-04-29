import { gql } from '@apollo/client';

export const QUERY_ITEMS = gql`
  query Items($input: ItemsInput) {
    items(input: $input) {
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

export const GET_BRAND_ITEMS = gql`
  query Query {
    brandItems {
      _id
      title
      description
      price
      stock
    }
  }
`;
