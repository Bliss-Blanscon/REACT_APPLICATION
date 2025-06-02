import { View, Text, StyleSheet } from "react-native";

export default function Box( {children, style}){
  return(
    <View style={[styles.box, style]}>
          <Text style={styles.man}>{children}</Text>
        </View>
  )
}

const styles = StyleSheet.create({
  box:{
    backgroundColor:"white",
    padding:20,
    height: 100,
    width:100
  },
  man:{
    fontSize:24,
    fontWeight:"bold",
    textAlign:"center",
    color:"gold"
  }
})