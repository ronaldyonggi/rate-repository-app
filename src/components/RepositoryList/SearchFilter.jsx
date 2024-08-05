import { StyleSheet } from 'react-native';
import theme from '../../theme';
import { Searchbar } from 'react-native-paper';

export default function SearchFilter({ searchKeyword, setSearchKeyword }) {
  return (
    <Searchbar 
        placeholder='Search'
        value={searchKeyword}
        onChangeText={(text) => setSearchKeyword(text)}
        style={styles.input}
      />
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 10,
    backgroundColor: theme.colors.repositoryItemBackground,
  },
})