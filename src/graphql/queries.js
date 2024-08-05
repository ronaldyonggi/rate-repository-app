import { gql } from '@apollo/client';
import { REPOSITORY_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  query getRepositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          ...RepositoryDetails
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
`;

export const GET_SINGLE_REPOSITORY = gql`
  query getSingleRepository($id: ID!) {
    repository(id: $id) {
      ...RepositoryDetails
    }
  }
  ${REPOSITORY_DETAILS}
`;

export const ME = gql`
  query me {
    me {
      id
      username
    }
  }
`;
