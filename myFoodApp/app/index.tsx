import {StyleSheet, Text, TouchableOpacity, ScrollView,View, Image, ImageBackground } from "react-native";
const logoImg = require("@/assets/images/adaptive-icon.png"); 



export default function Index() {
 return (
     <View style={{flex:1, backgroundColor: "plum", padding: 60}}>
      <ScrollView>
       {/* <Text><Text style={{color:"white"}}>Hello </Text>World</Text> */}
<Image source={logoImg} style={{width: 300, height: 300}}/>
<Text>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat consectetur ex minima, similique voluptatum voluptatem at, quae laborum esse harum eum amet obcaecati, exercitationem explicabo architecto illo totam magnam deserunt?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium molestiae dolorum molestias quo, quaerat rem maiores itaque dolores culpa libero. Natus sit incidunt aliquid dolores vel consectetur ea dicta sapiente.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, facilis pariatur? Facere, ullam soluta asperiores amet tempora aspernatur accusamus distinctio dolorum quisquam quo repudiandae veritatis perferendis tempore numquam natus eius.
Lorem ipsum dolor sit amet consectetur adipisicing elit. In, obcaecati optio. Harum, aperiam! Eos cupiditate earum nisi eaque alias omnis rerum, nesciunt, nam et quia maiores, blanditiis adipisci animi molestiae.
</Text>

<Image source={logoImg} style={{width: 300, height: 300}}/>



{/* <Image source={{ uri:'https://picsum.photos/300'}} style={{width: 300, height: 300}}/> */} 
{/* <ImageBackground source={logoImg} style={{flex: 1}}>
<Text>Image background</Text>
</ImageBackground> */}
</ScrollView>

     </View>
   )
  
 }
 
 
 
 const styles = StyleSheet.create({})
 