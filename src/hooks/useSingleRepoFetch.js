import { useQuery } from '@apollo/client';
import { GET_SINGLE_REPOSITORY } from '../graphql/queries';

export default function useSingleRepoFetch({ repoId, first }) {
  const queryVariables = {
    id: repoId,
    first,
  };

  const { loading, data, fetchMore } = useQuery(GET_SINGLE_REPOSITORY, {
    variables: queryVariables,
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...queryVariables,
      },
    });
  };

  if (loading) return { repository: null, loading };

  return {
    repository: data ? data.repository : null,
    loading,
    fetchMore: handleFetchMore,
  };
}
