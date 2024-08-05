import { FlatList, StyleSheet, View } from 'react-native';
import RepositoryItem from '../RepositoryItem';
import PickerContainer from './PickerContainer';

const ItemSeparator = () => <View style={styles.separator} />;

export default function RepositoryListContainer({
  repositories,
  principle,
  setPrinciple,
}) {
  // Get nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <>
      <PickerContainer principle={principle} setPrinciple={setPrinciple} />
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem repository={item} />}
        keyExtractor={(repository) => repository.id}
      />
    </>
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});
