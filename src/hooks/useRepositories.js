import { useEffect, useState } from 'react';

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
