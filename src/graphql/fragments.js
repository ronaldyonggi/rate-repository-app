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
    reviews {
      edges {
        node {
          ...ReviewDetails
        }
      }
    }
  }
  ${REVIEW_DETAILS}
`;

