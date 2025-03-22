import {StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
 return (
     <View style={styles.container}>
       <Text>Mama</Text>
    
     <TouchableOpacity style={styles.btn}>
        <Text>Sign Up</Text>
     </TouchableOpacity>
     </View>
   )
  
 }
 
 
 
 const styles = StyleSheet.create({
   container:{
    flex: 1,
     backgroundColor:'green',
     justifyContent:'center',
     alignItems: 'center',
     
   },
   btn:{
display: 'flex',

   }
 })
 