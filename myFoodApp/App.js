import "./app/globals.css"
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import homeScreen from './Screens/homeScreen'
import { StatusBar } from "expo-status-bar"



export default function App() {

  return 
    <View style={styles.container}>
      <homeScreen/>
     <StatusBar style="auto"/>
    </View>
  

}



const styles = StyleSheet.create({
  container:{
    backgroundColor:'green'
  }
})


  
