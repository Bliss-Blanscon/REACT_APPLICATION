import { StyleSheet, Text, SafeAreaView, Touchable, Pressable, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

const Screens = () => {
  return (
    <SafeAreaView style={styles.container}>
   <StatusBar style='light'/>
      <Pressable style={styles.touchContainer} onPress={() =>console.log("pressed")}>
    <Text style={styles.text}>Continue</Text>
   </Pressable>
   </SafeAreaView>
  )
}

export default Screens

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  paddingHorizontal:20,
    justifyContent: 'center',
    
  },
  touchContainer:{
    backgroundColor:'#1dbb54',
    padding:20,
    borderRadius:30,
    color:'white',
 alignItems:'center',
   
  },
  text:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',

  }
  
  
})