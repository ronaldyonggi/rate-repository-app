import { FlatList, StyleSheet, View } from 'react-native';
import RepositoryItem from '../RepositoryItem';
import { Picker } from '@react-native-picker/picker';

const ItemSeparator = () => <View style={styles.separator} />;

export default function RepositoryListContainer({
  repositories,
  principle,
  setPrinciple,
}) {
  function PickerContainer() {
    return (
      <Picker
        selectedValue={principle}
        onValueChange={(itemValue, itemIndex) => setPrinciple(itemValue)}
      >
        <Picker.Item label='Latest repositories' value='default' />
        <Picker.Item label='Highest rated repositories' value='highest-rated' />
        <Picker.Item label='Lowest rated repositories' value='lowest-rated' />
      </Picker>
    );
  }

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
      ListHeaderComponent={() => <PickerContainer />}
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});
