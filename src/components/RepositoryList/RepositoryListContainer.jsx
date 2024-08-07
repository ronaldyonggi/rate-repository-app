import { FlatList, StyleSheet, View } from 'react-native';
import RepositoryItem from '../RepositoryItem';
import PickerContainer from './PickerContainer';
import SearchFilter from './SearchFilter';

const ItemSeparator = () => <View style={styles.separator} />;

export default function RepositoryListContainer({
  repositories,
  principle,
  setPrinciple,
  searchKeyword,
  setSearchKeyword,
  onEndReach,
}) {
  // Get nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <>
      <SearchFilter
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
      <PickerContainer principle={principle} setPrinciple={setPrinciple} />
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem repository={item} />}
        keyExtractor={(repository) => repository.id}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    </>
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});
