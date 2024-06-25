import { Text, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

export default function AppBar() {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.tabText}>Repositories</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
  },
  tabText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 20,
    marginLeft: 10
  }
});
