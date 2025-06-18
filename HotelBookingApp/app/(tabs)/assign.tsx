import {
   View, 
   StyleSheet,
   Text, 
   StatusBar, 
   ScrollView, 
   Image, 
   Pressable, 
   TouchableOpacity, 
   TouchableHighlight, 
   TouchableWithoutFeedback,
   Touchable,
   Alert,
  } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const whites = require('@/assets/images/pam.jpg')





export default function assign(){
  const navigation = useNavigation();
  return(
    <ScrollView style={styles.container}>
<StatusBar barStyle={"light-content"}/>
<View>
<Text style={styles.mainText}>Welcome To This Interface</Text>
</View>


<View>
<Image source={whites} style={styles.image}/>
</View>

{/* Buttons */}
<View>

<View>
<Pressable onPress={() =>(Alert.alert("Pressed....Meow😽😽😽"))} style={styles.pressable}>
  <Text style={styles.text}>Pressable Button</Text>
</Pressable>
</View>




<View>
<TouchableOpacity onPress={() =>(Alert.alert("Pressed....Meow😽😽😽"))} style={styles.pressable}>
  <Text style={styles.text}>Pressable Button</Text>
</TouchableOpacity>
</View>


<View>
<TouchableHighlight onPress={() =>(Alert.alert("Pressed....Meow😽😽😽"))} style={styles.pressable}>
  <Text style={styles.text}>Pressable Button</Text>
</TouchableHighlight>
</View>



<View>
<TouchableWithoutFeedback onPress={() => navigation.navigate("Screens")} style={styles.pressable}>
  <Text style={styles.text}>Pressable Button</Text>
</TouchableWithoutFeedback>
</View>

</View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
container:{
  flex:1,
  paddingTop: StatusBar.currentHeight,
  backgroundColor:"#333",
  paddingVertical:20,
  paddingHorizontal:16
},
mainText:{
  fontSize:25,
  fontWeight:"bold",
  padding:10,
alignItems:'center',
justifyContent:"center",
color:"#98568d",
fontStyle:"italic"
},
image:{
  width:400,
  height:300,
  borderRadius:15,
objectFit:"fill",

},
pressable:{
  backgroundColor:"#9e7bb5",
  marginTop:20,
  padding:20,
  justifyContent:"center",
  alignItems:"center",
  borderRadius:8
},
text:{
  fontSize:30,
  fontWeight:"bold",
  color:"#5d3f6a"
}
})