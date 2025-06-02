// import { useState, useEffect } from 'react'
import { StyleSheet, View , Text, Dimensions, useWindowDimensions} from 'react-native'
import React from 'react'

const dynamic = () => {
//   // "Hey React, please create a box (dimensions) where I can store the current screen size — and help me update it later using SetDimensions."
//   const [dimensions, SetDimensions] = useState({
//     window: Dimensions.get("window"),
//   });

//   // "Yo! Keep an eye on the screen. If the user rotates the phone or resizes the window, let me know. When that happens, I’ll update my stored screen size with the new values."
//   useEffect(() =>{
//   const screenRotate = Dimensions.addEventListener("change", ({ window }) =>{
//   SetDimensions({window});
// });

// // "When this component is no longer in use, stop listening for screen changes. Don’t keep running things in the background for no reason."
// return () => screenRotate?.remove();
// });

// const {window} = dimensions
const windowWidth = useWindowDimensions().width;
const windowHeight = useWindowDimensions().height;


  return (
    
    <View style={styles.container}>
      
     <View style={[styles.Box, { width:windowWidth >500 ?"70%":"90%",
  height:windowHeight > 600 ?"60%":"90%",}]}>
      <Text style={{fontSize:windowWidth > 500 ? 50 : 24,
   fontWeight:"bold"}}>Welcome!</Text>
     </View>
     
    </View>
  )
}

export default dynamic





const styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor: "plum",
     padding: 60
  },
  Box:{
  //   width:windowWidth >500 ?"70%":"90%",
  //   height:windowHeight > 600 ?"60%":"90%",
    backgroundColor:"lightblue",
    alignItems:"center",
    justifyContent:"center"
  },
  // man:{
  //   fontSize:windowWidth > 500 ? 50 : 24,
  //   fontWeight:"bold"
  // }
})