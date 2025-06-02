import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomButtons = ({onPress, title}) => {
  return (
   <Pressable onPress={onPress} style={styles.btn}>
    <Text style={styles.text}>{title}</Text>
   </Pressable>
  )
}

export default CustomButtons;

const styles = StyleSheet.create({
  btn:{
    backgroundColor:"lightblue",
    borderRadius:5,
    padding:10,
    justifyContent:"center",
    alignItems:"center"
  },
  text:{
    fontSize:25,
    fontWeight:"bold",
    textTransform:"uppercase",
    color:"darkblue"
  }
})