import { FlatList, StyleSheet, View } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { repositories } from '../../repositories';

const ItemSeparator = () => <View style={styles.separator} />;

export default function RepositoryList() {
  return (
    <FlatList
      data={repositories}
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
