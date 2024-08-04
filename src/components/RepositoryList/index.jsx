import { Text } from 'react-native';
import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';
import { useState } from 'react';

export default function RepositoryList() {
  const [principle, setPrinciple] = useState('default');
  const { repositories, loading } = useRepositories(principle);

  if (loading) return <Text>Loading...</Text>;

  return (
    <RepositoryListContainer
      repositories={repositories}
      principle={principle}
      setPrinciple={setPrinciple}
    />
  );
}
