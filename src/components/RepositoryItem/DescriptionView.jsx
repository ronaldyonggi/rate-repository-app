import { View, StyleSheet } from 'react-native'
import Text from '../Text'
import React from 'react'

export default function DescriptionView({ fullName, description, language }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text} fontWeight='bold' testID='fullName'>{fullName}</Text>
      <Text style={styles.text} testID='description'>{description}</Text>
      <Text color='primary' style={[styles.text, styles.language]} testID='language'>{language}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    maxWidth: 300,
  },
  language: {
    // Make the blue background fit the text instead of stretching
    alignSelf: 'flex-start',
    padding: 4
  },
  text: {
    margin: 4,
  }
})