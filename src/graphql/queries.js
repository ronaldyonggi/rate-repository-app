import { gql } from '@apollo/client';
import { REPOSITORY_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  query getRepositories {
    repositories {
      edges {
        node {
          ...RepositoryDetails
      }
    }
  }
  }
  ${REPOSITORY_DETAILS}
`;
`;

export const ME = gql`
  query me {
    me {
      id
      username
    }
  }
`;
