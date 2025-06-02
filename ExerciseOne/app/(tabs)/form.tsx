import { StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput, Switch } from 'react-native'
import { useState } from 'react'
import React from 'react'

const form = () => {
  const [name, setname]= useState("")
  const [isDarkMode, setDarkMode] = useState(false)
  return (
    <SafeAreaView style={styles.container}>
      <TextInput  style={styles.input}
       value={name} 
      onChangeText={setname} 
      placeholder='email@example.com'
      secureTextEntry
      keyboardType="numeric"
      autoCorrect
      autoCapitalize="sentences"
      />

{/* multiline TextInput */}
<TextInput style={[styles.input, styles.input2]} multiline placeholder="Type anything"/>
      <Text style={styles.text}>My name is {name}</Text>

      <View style={styles.switchContainer}>
        <Text style={styles.text}>Dark Mode</Text>
        <Switch value={ isDarkMode} onValueChange={()=> setDarkMode ((previousState)=> !previousState)}
        trackColor={{false:"#767577",true:"lightblue"}}
        thumbColor="#f4f3f4"
        />
      </View>
    </SafeAreaView>
  )
}

export default form

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    paddingTop:StatusBar.currentHeight,
  },
  input:{
    height:40,
    margin:12,
    padding:10,
    borderWidth:1,
  },
  text:{
    fontSize:30,
    padding:10
  },
  input2:{
    minHeight:100
  },
  switchContainer:{
    flexDirection:"row",
    paddingHorizontal:10,
    alignItems:"center",
    justifyContent:"space-between",
  }
})