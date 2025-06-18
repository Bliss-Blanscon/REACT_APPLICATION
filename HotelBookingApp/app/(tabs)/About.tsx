import {View, Text, StyleSheet, SafeAreaView, StatusBar} from 'react-native'
import React from 'react'
 

export default function About (){
  return(
    <SafeAreaView style={styles.container}>
    <View>
      <Text>Hello Ghana</Text>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
container:{
  flex:1,
  paddingTop:StatusBar.currentHeight,
  paddingHorizontal:16,
}
})