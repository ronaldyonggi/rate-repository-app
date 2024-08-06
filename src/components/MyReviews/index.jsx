import { FlatList, Text } from 'react-native';
import ReviewItem from './ReviewItem';
import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../../graphql/queries';

export default function MyReviews() {
  const { loading, data } = useQuery(GET_CURRENT_USER, {
    variables: {
      includeReviews: true,
    },
  });

  if (loading) return <Text>Loading...</Text>;

  const reviewNodes = data.me
    ? data.me.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={(review) => review.id}
    />
  );
}
