import { View, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import AvatarView from './AvatarView';
import DescriptionView from './DescriptionView';
import StatsView from './StatsView';
import { useNavigate } from 'react-router-native';
import Text from '../Text';
import * as Linking from 'expo-linking';

export default function RepositoryItem({ repository, isSingleView }) {
  const navigate = useNavigate();

  const {
    id,
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
    url,
  } = { ...repository };

  const handleSingleView = () => {
    !isSingleView && navigate(`/repository/${id}`);
  };

  const handleOpenURL = () => {
    Linking.openURL(url);
  };

  return (
    <Pressable
      style={styles.container}
      testID='repositoryItem'
      onPress={handleSingleView}
    >
      <View style={styles.top}>
        <AvatarView ownerAvatarUrl={ownerAvatarUrl} />
        <DescriptionView
          fullName={fullName}
          description={description}
          language={language}
        />
      </View>
      <View>
        <StatsView
          stargazersCount={stargazersCount}
          forksCount={forksCount}
          reviewCount={reviewCount}
          ratingAverage={ratingAverage}
        />
      </View>

      {/* Only display 'Open in GitHub' button in single view mode */}
      {isSingleView && (
        <Pressable onPress={handleOpenURL}>
          <Text color='primary' fontWeight='bold' style={styles.buttonText}>
            Open in GitHub
          </Text>
        </Pressable>
      )}
    </Pressable>
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
  buttonText: {
    padding: 15,
    textAlign: 'center',
    margin: 15,
  },
});
