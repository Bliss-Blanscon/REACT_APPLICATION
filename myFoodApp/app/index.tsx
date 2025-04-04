import { useState } from "react";
import {StyleSheet, Text, TouchableOpacity, ScrollView,View, Image, ImageBackground, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert } from "react-native";
const logoImg = require("@/assets/images/adaptive-icon.png"); 



export default function Index() {
  const [isModalVisible, setIsModalVisible] =useState(false);
 return (
     <View style={{flex:1, backgroundColor: "plum", padding: 60}}>
    <StatusBar  backgroundColor="purple" barStyle="light-content" />
{/* <ActivityIndicator />
<ActivityIndicator size="large" />
<ActivityIndicator size="large" color="midnightblue" animating={true}/> */}

      <ScrollView>
{/* 
        <Button title="Alert" onPress={() => Alert.alert("Invalid data!...")}/>
        <Button title="Alert" onPress={() => Alert.alert("Invalid data!...", "DOB is incorrect")}/>
        <Button title="Alert" onPress={() => Alert.alert("Invalid data!...","DOB is incorrect",[
          {
            text: "Cancel",
            onPress:()=> console.log("Cancel pressed")
          },
          {
            text: "OK",
            onPress:()=> console.log("Ok pressed")
          },
          {
            text: "Restart",
            onPress:()=> console.log("Restarting App"),
          },
          
        ])}/> */}


{/* Lets Study Buttons */}
{/* <View>
  <Button title="Press" onPress={() => setIsModalVisible(true)} color="midnightblue" />
</View> */}




{/* lets study Modal components which overlaps the main screen */}
{/* <Modal visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)} animationType="fade" presentationStyle="pageSheet">
<View style={{flex:1, backgroundColor: "lightblue", padding: 60}}>
  <Text>Modal Content</Text>
  <Text>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat consectetur ex minima, similique voluptatum voluptatem at, quae laborum esse harum eum amet obcaecati, exercitationem explicabo architecto illo totam magnam deserunt?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium molestiae dolorum molestias quo, quaerat rem maiores itaque dolores culpa libero. Natus sit incidunt aliquid dolores vel consectetur ea dicta sapiente.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, facilis pariatur? Facere, ullam soluta asperiores amet tempora aspernatur accusamus distinctio dolorum quisquam quo repudiandae veritatis perferendis tempore numquam natus eius.
Lorem ipsum dolor sit amet consectetur adipisicing elit. In, obcaecati optio. Harum, aperiam! Eos cupiditate earum nisi eaque alias omnis rerum, nesciunt, nam et quia maiores, blanditiis adipisci animi molestiae.
</Text> 
  <Button title="Close" onPress={()=> setIsModalVisible(false)} color="midnightblue"/>
  </View>
</Modal> */}















       {/* <Text><Text style={{color:"white"}}>Hello </Text>World</Text> */}
       {/* <Pressable onPress={() => console.log("Image Pressed")}>
<Image source={logoImg} style={{width: 300, height: 300}}/>
</Pressable>


<Pressable onPress={() => console.log("Text Pressed")}>
<Text>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat consectetur ex minima, similique voluptatum voluptatem at, quae laborum esse harum eum amet obcaecati, exercitationem explicabo architecto illo totam magnam deserunt?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium molestiae dolorum molestias quo, quaerat rem maiores itaque dolores culpa libero. Natus sit incidunt aliquid dolores vel consectetur ea dicta sapiente.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, facilis pariatur? Facere, ullam soluta asperiores amet tempora aspernatur accusamus distinctio dolorum quisquam quo repudiandae veritatis perferendis tempore numquam natus eius.
Lorem ipsum dolor sit amet consectetur adipisicing elit. In, obcaecati optio. Harum, aperiam! Eos cupiditate earum nisi eaque alias omnis rerum, nesciunt, nam et quia maiores, blanditiis adipisci animi molestiae.
</Text>
</Pressable>
<Image source={logoImg} style={{width: 300, height: 300}}/> */}



{/* <Image source={{ uri:'https://picsum.photos/300'}} style={{width: 300, height: 300}}/> */} 
{/* <ImageBackground source={logoImg} style={{flex: 1}}>
<Text>Image background</Text>
</ImageBackground> */}

</ScrollView>

     </View>
   )
  
 }
 
 
 
 const styles = StyleSheet.create({})
 