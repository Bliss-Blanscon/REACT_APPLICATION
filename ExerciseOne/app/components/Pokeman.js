import { Platform, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const pokeman = ({
  name,
  image,
  hp,
  type,
  weaknesses, 
  moves,
  onPress
}) => {
  return (
   
 <View style={styles.card}>
<View style={styles.nameContainer}> 
  <Text style={styles.name}>{name}</Text>
  <Text style={styles.hp}>{hp}</Text>
</View>

<Image source={image} resizeMode='contain' accessibilityLabel={`${name} pokeman`} style={styles.image}/>

<Pressable onPress={onPress}>
  <View style={styles.type}>
  <Text>{type}</Text>
</View>
</Pressable>



<View style={styles.moves1}>
  <Text style={styles.moves}>
    Moves: {moves.join(" , ")}
</Text>
</View>

<View style={styles.weaknesses1}> 
  <Text style={styles.weaknesses}>
    Weaknesses: {weaknesses.join(" , ")}
</Text>
</View>
 </View>
 
  )
}

export default pokeman

const styles = StyleSheet.create({
  card:{
    backgroundColor:"white",
    borderRadius:16,
    borderWidth:2,
    margin:16,
    padding:16,
    ...Platform.select({
ios:{
shadowOffset:{width:2, height:2},
shadowColor:"#333",
shadowOpacity:0.3,
shadowRadius:4
},
android:{
elevation:5,
},
}),
    
  },
  nameContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  name:{
    fontSize:20,
    fontWeight:"700"
  },
  hp:{
    color:"ash",
    fontWeight:"400"
  },
  image:{
    justifyContent:"center",
    marginTop:20,
    width:100,
    height:200,
    objectFit:"contain",
    alignSelf:"center"
  },
  type:{
    borderWidth:2,
    borderColor:"darkbrown",
    alignItems:"center",
    padding:6,
    borderRadius:16,
    width:60,
    justifyContent:"space-between",
margin:"auto",
marginTop:15,
marginBottom:20
  },

  moves1:{
marginBottom:6
  },
  moves:{
fontSize:15,
fontWeight:"500"
  },
  weaknesses:{
    fontSize:15,
    fontWeight:"500"
      }
})