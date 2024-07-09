import { FlatList, StyleSheet, View } from 'react-native';
import RepositoryItem from './RepositoryItem';
// import { repositories } from '../../repositories';
import { useEffect, useState } from 'react';

const ItemSeparator = () => <View style={styles.separator} />;

export default function RepositoryList() {
  const [repositories, setRepositories] = useState();

  const fetchRepositories = async () => {
    const uri = 'http://192.168.0.161:5000/api/repositories';
    const response = await fetch(uri);
    const json = await response.json();
    console.log(json)
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

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
