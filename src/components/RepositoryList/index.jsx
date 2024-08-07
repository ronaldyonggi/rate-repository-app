import { Text } from 'react-native';
import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';

export default function RepositoryList() {
  // Return the first x repositories
  const first = 3;

  const [searchKeyword, setSearchKeyword] = useState('');
  const [debouncedSearchKeyword] = useDebounce(searchKeyword, 1500);
  const [principle, setPrinciple] = useState('default');
  const { repositories, loading, fetchMore } = useRepositories(
    principle,
    debouncedSearchKeyword,
    first
  );
  const onEndReach = () => {
    fetchMore();
  };

  if (loading) return <Text>Loading...</Text>;

  return (
    <RepositoryListContainer
      repositories={repositories}
      principle={principle}
      setPrinciple={setPrinciple}
      searchKeyword={searchKeyword}
      setSearchKeyword={setSearchKeyword}
      onEndReach={onEndReach}
    />
  );
}
