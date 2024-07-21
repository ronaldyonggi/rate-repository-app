import { FlatList, StyleSheet, View } from 'react-native';
import RepositoryItem from '../../RepositoryItem';

const ItemSeparator = () => <View style={styles.separator} />;

export default function RepositoryListContainer({ repositories }) {
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
