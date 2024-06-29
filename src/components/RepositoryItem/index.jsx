import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import AvatarView from './AvatarView';
import DescriptionView from './DescriptionView';
import StatisticsView from './StatisticsView';

export default function RepositoryItem({ repository }) {
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
  } = { ...repository };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <AvatarView ownerAvatarUrl={ownerAvatarUrl} />
        <DescriptionView
          fullName={fullName}
          description={description}
          language={language}
        />
      </View>
      <View>
        <StatisticsView
          stargazersCount={stargazersCount}
          forksCount={forksCount}
          reviewCount={reviewCount}
          ratingAverage={ratingAverage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  top: {
    flexDirection: 'row',
  },
});
