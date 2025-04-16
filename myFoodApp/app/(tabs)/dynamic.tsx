import { useState, useEffect } from 'react'
import { StyleSheet, View , Text, Dimensions} from 'react-native'
import React from 'react'

const dynamic = () => {
  return (
    <View style={styles.container}>
     <View style={styles.Box}>
      <Text style={styles.text}>Welcome!</Text>
     </View>
     
    </View>
  )
}

export default dynamic

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

console.log({windowHeight,windowWidth});

const styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor: "plum",
     padding: 60
  },
  Box:{
    width:windowWidth >500 ?"70%":"90%",
    height:windowHeight > 600 ?"60%":"90%",
    backgroundColor:"lightblue",
    alignItems:"center",
    justifyContent:"center"
  },
  text:{
    fontSize:windowWidth > 500 ? 50 : 24,
    fontWeight:"bold"
  }
})