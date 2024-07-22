import { Text } from 'react-native';
import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

export default function RepositoryList() {
  const { repositories, loading } = useRepositories();

  if (loading) return <Text>Loading...</Text>;

  return <RepositoryListContainer repositories={repositories} />;
}
