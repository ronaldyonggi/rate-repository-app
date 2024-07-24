import { useQuery } from '@apollo/client';
import { GET_SINGLE_REPOSITORY } from '../graphql/queries';

export default function useSingleRepoFetch(repoId) {
  const { loading, data } = useQuery(GET_SINGLE_REPOSITORY, {
    variables: {
      id: repoId,
    },
  });

  return { repository: data ? data.repository : null, loading };
}
