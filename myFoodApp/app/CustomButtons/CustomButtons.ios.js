import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomButtons = ({onPress, title}) => {
  return (
   <Pressable onPress={onPress}>
    <Text>{title}</Text>
   </Pressable>
  )
}

export default CustomButtons;

const styles = StyleSheet.create({})