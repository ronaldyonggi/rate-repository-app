import { FlatList, Text } from 'react-native';
import { useParams } from 'react-router-native';
import useSingleRepoFetch from '../../hooks/useSingleRepoFetch';
import RepositoryItem from '../RepositoryItem';
import ReviewItem from './ReviewItem';

export default function SingleRepoView() {
  // Fetch id from path URL
  const repoId = useParams().id;
  const { repository, loading, fetchMore } = useSingleRepoFetch({
    repoId,
    first: 2,
  });

  const onEndReach = () => {
    fetchMore();
  };

  if (loading) return <Text>Loading...</Text>;

  const reviewNodes = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={(review) => review.id}
      ListHeaderComponent={() => (
        <RepositoryItem repository={repository} isSingleView={true} />
      )}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
}
