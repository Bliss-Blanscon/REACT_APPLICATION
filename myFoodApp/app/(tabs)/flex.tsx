import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import Box from '../compo/Box'

const flex = () => {
  return (


    
    <View style={styles.container}>
      {/* <View style={{backgroundColor:"plum", flex:1}}></View> */}
     
    <Box style={{backgroundColor: "#8e9b00" , top:0, left:200, right:100, bottom:100,  position:"absolute"}}> Box 1</Box>
    <Box style={{backgroundColor: "#b65d1f"}}> Box 2</Box>
    <Box style={{backgroundColor: "#1c4c56"}}> Box 3</Box>
    <Box style={{backgroundColor: "#ab9156"}}> Box 4</Box>
        <Box style={{backgroundColor: "#6b0803", top:100, left:200, right:100, bottom:100,position:"absolute"}}> Box 5</Box>
        <Box style={{backgroundColor: "#1c4c56"}}> Box 6</Box>
        <Box style={{backgroundColor: "#b95f21"}}> Box 7</Box>
        <Box style={{backgroundColor: "#1c4c56"}}> Box 8</Box>
        <Box style={{backgroundColor: "#ab9156"}}> Box 9</Box>
        <Box style={{backgroundColor: "#6b0803"}}> Box 10</Box>
        <Box style={{backgroundColor: "#8e9b00"}}> Box 11</Box>
        <Box style={{backgroundColor: "#b65d1f"}}> Box 12</Box>
    

    
    </View>

  )
}

export default flex

const styles = StyleSheet.create({
  container:{
    // flex:1,
  //   flexDirection:"row",
  //  alignItems:"baseline" ,
  // flexWrap:"wrap",
  // height:300,
  // rowGap:20,
  // columnGap:20,
  // gap:30,
    backgroundColor:"white", 
    borderWidth:6,
    borderColor:"red",
   

  }
})