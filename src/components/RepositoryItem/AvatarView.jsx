import { View, StyleSheet, Image } from 'react-native';
import React from 'react';

export default function AvatarView({ ownerAvatarUrl }) {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: ownerAvatarUrl }} />
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 48,
    height: 48,
    marginHorizontal: 15,
    marginTop: 7,
    borderRadius: 4,
  },
});
