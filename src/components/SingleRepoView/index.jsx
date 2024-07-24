import { Text } from 'react-native';
import { useParams } from 'react-router-native';
import useSingleRepoFetch from '../../hooks/useSingleRepoFetch';
import RepositoryItem from '../RepositoryItem';

export default function SingleRepoView() {
  // Fetch id from path URL
  const repoId = useParams().id;
  const { repository, loading } = useSingleRepoFetch(repoId);

  if (loading) return <Text>Loading...</Text>;
  // console.log(repository);

  return <RepositoryItem repository={repository} isSingleView={true} />;
}
