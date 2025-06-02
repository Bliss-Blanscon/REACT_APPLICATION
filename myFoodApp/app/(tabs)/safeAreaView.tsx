import {View, StyleSheet, Text, SafeAreaView, Platform } from 'react-native'
import React from 'react'
import CustomButtons from '../CustomButtons/CustomButtons.android';


const safeAreaView = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
    <View style={styles.container}>
      <View style={styles.box}>
      <Text style={styles.text}> Welcome</Text>

      <CustomButtons  title="Press" onPress={()=> alert("Pressed!")}/>
      </View>

    </View>
    </SafeAreaView>
  )
}

export default safeAreaView

const styles = StyleSheet.create({
  safeContainer:{
     flex:1,
    backgroundColor:"plum"
  },
  container:{
    flex:1,
    backgroundColor:"plum",
    paddingTop: Platform.OS==='android'? 25:0
  },
  box:{
padding:20
  },
  text:{
...Platform.select({
  ios:{
    color:"blue",
    fontSize:24,
    fontStyle:"italic"
  },
android:{
color:"purple",
fontSize:30,
fontStyle:"italic"
}
  }),
    fontWeight:"bold",
    textAlign:"center"
  }
})