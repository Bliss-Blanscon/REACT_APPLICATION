import { FlatList, SafeAreaView, View, Image, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";

export default function flatList(){
const data =[
  {
image: require('@/assets/images/pam.jpg'),
title:"First Image",
description:"Beautiful Decors"
  },
  {
image: require('@/assets/images/pam.jpg'),
title:"Second Image",
description:"Beautiful Decors"
  },
  {
image: require('@/assets/images/pam.jpg'),
title:"Third Image",
description:"Beautiful Decors"
  },
  {
image: require('@/assets/images/pam.jpg'),
title:" Fourth Image",
description:"Beautiful Decors"
  },
  {
image: require('@/assets/images/pam.jpg'),
title:"Fifth Image",
description:"Beautiful Decors"
  },
]

  return(
<SafeAreaView style={styles.container}>
<Text style={styles.mainText}>Hola 🖐️......</Text>

<FlatList
data={data}
renderItem={({item}) =>{
  return(
    <View>
<Image source={item.image} style={styles.image1}/>
<Text style={styles.title1}>{item.title}</Text>
<Text style={styles.description}>{item.description}</Text>
    </View>
  )
}}
/>
</SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:StatusBar.currentHeight,
    paddingHorizontal:20,
    marginVertical:10,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"black"
  },
  mainText:{
fontSize:40,
fontWeight:"bold",
alignItems:"center",
justifyContent:"center",
padding:15,
color:"white"
  },
image1:{
  width:400,
  height:200,
  borderRadius:15
},
title1:{
  fontSize:30,
  fontWeight:"500",
 color:"white"
},
description:{
  fontSize:24,
color:"white"
}
})