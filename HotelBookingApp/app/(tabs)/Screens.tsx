import { StyleSheet, Text, SafeAreaView, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar'
import React from 'react'

export default function Screens (){
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
   <StatusBar style='light'/>
      <Pressable style={styles.touchContainer} onPress={() =>navigation.navigate("flatList")}>
    <Text style={styles.text}>Continue to FlatList</Text>
   </Pressable> 

   <Pressable style={styles.touchContainer} onPress={() =>navigation.navigate("assign")}>
    <Text style={styles.text}>Continue to Assign</Text>
   </Pressable>

   <Pressable style={styles.touchContainer} onPress={() =>navigation.navigate("About")}>
    <Text style={styles.text}>Continue to About</Text>
   </Pressable>
   </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  paddingHorizontal:20,
    justifyContent: 'center', 
  },
  touchContainer:{
    marginTop:30,
    backgroundColor:'#1dbb54',
    padding:20,
    borderRadius:30,
 alignItems:'center',
   
  },
  text:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
}
  
  
})