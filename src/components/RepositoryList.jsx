import { FlatList, StyleSheet, View } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import Text from './Text';
// import { repositories } from '../../repositories';
// import { useEffect, useState } from 'react';
// import useRepositories from '../hooks/useRepositories';

const ItemSeparator = () => <View style={styles.separator} />;

export default function RepositoryList() {
  // const { repositories } = useRepositories();
  const {loading, data} = useQuery(GET_REPOSITORIES)

  if (loading) return <Text>Loading...</Text>

  // Get nodes from the edges array
  const repositoryNodes = data
    ? data.repositories.edges.map((edge) => edge.node)
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
