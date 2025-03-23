import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
const person = require("@/assets/images/Profile Image.png")

const index = () => {
  return (
    <View style={styles.container}>



     {/* header view */}
     <View style={styles.firstView}>


      <Text style={styles.devs}>Hello , Devs</Text>
      <Text style={styles.task}>14 tasks today</Text>

<TouchableOpacity style={styles.iconperson}>
      <Image source={person} />
      </TouchableOpacity>
     </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#F7F0E8',
    width:393,
    height:852,
    borderRadius: 30
  },
  devs:{
fontFamily: 'Lato',
fontWeight: 700,
fontSize: 32,


letterSpacing:0,
color:'#000000'
  },
  task:{
    fontFamily: 'lato',
    fontWeight: 500,
    fontSize: 12,
  },
  firstView:{
    width:354,
    height:52,
    verticalAlign:'top',
  paddingTop:52,
  paddingBottom:30,
  paddingLeft:20,
  paddingRight:19

  },
  iconperson:{
    width:46,
    height:45,
    display: 'flex',
    flexDirection: 'row',
    marginLeft:306,
verticalAlign: 'top',
marginTop:-40
  }
  
})