import { View, StyleSheet, Pressable, Image } from 'react-native';
import React from 'react';
import DescriptionView from './DescriptionView';
import StatsView from './StatsView';
import { useNavigate } from 'react-router-native';
import Text from '../Text';
import * as Linking from 'expo-linking';
import theme from '../../theme';

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
        <Image style={styles.avatar} source={{ uri: ownerAvatarUrl }} />
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
    backgroundColor: theme.colors.repositoryItemBackground,
    paddingTop: 8 
  },
  top: {
    flexDirection: 'row',
  },
  avatar: {
    width: 48,
    height: 48,
    marginHorizontal: 15,
    marginTop: 7,
    borderRadius: 4,
  },
  buttonText: {
    padding: 15,
    textAlign: 'center',
    marginHorizontal: 15,
    marginBottom: 15,
    marginTop: 5
  },
});
