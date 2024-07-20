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
export default function useRepositories() {
  const { loading, data } = useQuery(GET_REPOSITORIES);

  if (loading) return { repositories: [], loading };

  return { repositories: data.repositories, loading };
}
