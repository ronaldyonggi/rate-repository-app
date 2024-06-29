import { StyleSheet, View } from 'react-native'
import React from 'react'
import Text from '../../Text'

export default function CountView({ count, property }) {
  return (
    <View style={styles.container}>
      <Text fontWeight='bold'>{count}</Text>
      <Text>{property}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
})