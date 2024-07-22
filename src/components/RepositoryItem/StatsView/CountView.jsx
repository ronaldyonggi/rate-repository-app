import { StyleSheet, View } from 'react-native'
import React from 'react'
import Text from '../../Text'

export default function CountView({ count, property, testID }) {
  return (
    <View style={styles.container}>
      <Text fontWeight='bold' testID={testID}>{count}</Text>
      <Text>{property}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
})