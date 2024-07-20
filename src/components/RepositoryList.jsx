import { FlatList, StyleSheet, Text, View } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const ItemSeparator = () => <View style={styles.separator} />;

export default function RepositoryList() {
  const { repositories, loading } = useRepositories();

  if (loading) return <Text>Loading...</Text>;

  // Get nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem repository={item} />}
      keyExtractor={(repository) => repository.id}
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});
