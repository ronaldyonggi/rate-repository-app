import { View, StyleSheet } from 'react-native'
import Text from '../Text'
import React from 'react'

export default function DescriptionView({ fullName, description, language }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text} fontWeight='bold' >{fullName}</Text>
      <Text style={styles.text} >{description}</Text>
      <Text color='primary' style={[styles.text, styles.language]}>{language}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    maxWidth: 370,
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