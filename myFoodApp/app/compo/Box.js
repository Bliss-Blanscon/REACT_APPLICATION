import { View, Text, StyleSheet } from "react-native-web";

export default function Box(){
  return(
    <View style={styles.box}>
          <Text style={styles.text}>flexUse</Text>
        </View>
  )
}

const styles = StyleSheet.create({
  box:{
    backgroundColor:"white",
    padding:20
  },
  text:{
    fontSize:24,
    fontWeight:"bold",
    textAlign:"center"
  }
})