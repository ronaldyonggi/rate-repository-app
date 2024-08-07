// import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

/* Implementation using REST API
export default function useRepositories() {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);
  const repositoriesURI = 'http://192.168.175.89:5000/api/repositories';

  const fetchRepositories = async () => {
    setLoading(true);
    const response = await fetch(repositoriesURI);
    const json = await response.json();

    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
}
*/

// Implementation using GraphQL
export default function useRepositories(
  principle,
  debouncedSearchKeyword,
  first
) {
  let orderBy, orderDirection;

  switch (principle) {
    case 'highest-rated':
      orderBy = 'RATING_AVERAGE';
      orderDirection = 'DESC';
      break;
    case 'lowest-rated':
      orderBy = 'RATING_AVERAGE';
      orderDirection = 'ASC';
      break;
    default:
      orderBy = 'CREATED_AT';
      orderDirection = 'DESC';
  }

  const queryVariables = {
    orderBy,
    orderDirection,
    searchKeyword: debouncedSearchKeyword,
    first,
  };

  const { loading, data, fetchMore } = useQuery(GET_REPOSITORIES, {
    variables: queryVariables,
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...queryVariables,
      },
    });
  };

  if (loading) return { repositories: [], loading };

  return {
    repositories: data.repositories,
    fetchMore: handleFetchMore,
    loading,
  };
}
