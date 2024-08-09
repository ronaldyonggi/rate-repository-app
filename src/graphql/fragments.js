import { gql } from '@apollo/client';

export const REVIEW_DETAILS = gql`
  fragment ReviewDetails on Review {
    id
    text
    rating
    createdAt
    user {
      id
      username
    }
  }
`;

export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    id
    fullName
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
    ownerAvatarUrl
    url
    reviews(first: $first, after: $after) {
      edges {
        node {
          ...ReviewDetails
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ${REVIEW_DETAILS}
`;
