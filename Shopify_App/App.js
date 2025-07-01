import { StyleSheet, Text, View, SafeAreaView, Button, StatusBar, Pressable, Image} from 'react-native';
import React from 'react';
import shopImage from './assets/shopify1.jpg'


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark-content" />
<View style={styles.lineView}>
  <Pressable style={styles.line}></Pressable>
</View>


<View style={styles.stayView}>
  <Text style={styles.stayText}>Stay in the Know, </Text>
  <Text style={styles.stayText}>Wherever You Go</Text>

</View>


<View style={styles.imageView}>
  <Image source={shopImage} style={styles.image} />
</View>



<View style={styles.mainbuttomTextView}>
  <Text style={styles.mainbuttomText1}>Get real-time update on every order, from</Text>
  <Text style={styles.mainbuttomText2}> checkout to delivery. Shopping made smarter</Text>
  <Text style={styles.mainbuttomText3}>-with peace of mind</Text>
</View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal:20,
  },
  line:{
    borderWidth:4,
    borderColor:"#ff6b57",
    borderRadius:10,
  },
  lineView:{
    paddingTop:30,
  },
  stayView:{
    justifyContent:"center",
    alignItems:"center",
    paddingTop:80,
  },
  stayText:{
    fontFamily:'lucida grande',
    fontSize:35,
    fontWeight:"bold"
  },
  imageView:{
paddingTop:40
  },
  image:{
    width:350,
    height:350
  },
  mainbuttomTextView:{
paddingTop:30
  },
  mainbuttomText1:{
    fontSize:17,
    paddingLeft:10,
    color:"#9aa4b2",
    justifyContent:"center",
    alignItems:"center"
  },
  mainbuttomText2:{
    fontSize:17,
  color:"#9aa4b2",
    justifyContent:"center",
    alignItems:"center"
  },
  mainbuttomText3:{
    fontSize:17,
    color:"#9aa4b2",
    alignSelf:"center"
  }
});
