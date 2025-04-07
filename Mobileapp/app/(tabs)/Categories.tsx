import { ScrollView, StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'
import React from 'react'
const Woman1 = require('@/assets/images/young woman working online.png')
const Woman2 = require('@/assets/images/young woman working at desk.png')


const Categories = () => {
  return (
    <ScrollView>
<View style={styles.cates}>
  <Text style={styles.cat}>Categories</Text>




  {/* Image section */}
<View style={styles.imagesec}>
  <TouchableOpacity style={styles.backimage}>
    <Text style={styles.exercise}>Exercise</Text>
    <Text style={styles.tasks}>12 Tasks</Text>
<Image source={Woman1} style={styles.woman1}/>
</TouchableOpacity>

<TouchableOpacity style={styles.backimage}>
<Text style={styles.exercise}>Study</Text>
<Text style={styles.tasks}>12 Tasks</Text>
<Image source={Woman2} style={styles.woman2}/>
</TouchableOpacity>
</View>

      

<View style={styles.imagesec}>
  <TouchableOpacity style={styles.backimage}>
    <Text style={styles.exercise}>Code</Text>
    <Text style={styles.tasks}>12 Tasks</Text>
<Image source={Woman1} style={styles.woman1}/>
</TouchableOpacity>

<TouchableOpacity style={styles.backimage}>
<Text style={styles.exercise}>Eat</Text>
<Text style={styles.tasks}>12 Tasks</Text>
<Image source={Woman2} style={styles.woman2}/>
</TouchableOpacity>
</View>

<View style={styles.imagesec}>
  <TouchableOpacity style={styles.backimage}>
    <Text style={styles.exercise}>Code</Text>
    <Text style={styles.tasks}>12 Tasks</Text>
<Image source={Woman1} style={styles.woman1}/>
</TouchableOpacity>

<TouchableOpacity style={styles.backimage}>
<Text style={styles.exercise}>Eat</Text>
<Text style={styles.tasks}>12 Tasks</Text>
<Image source={Woman2} style={styles.woman2}/>
</TouchableOpacity>
</View>

</View>

-    </ScrollView>
    
  )
}

export default Categories

const styles = StyleSheet.create({
  imagesec:{
display:"flex",
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center"

  },
  backimage:{
backgroundColor:"#FBF9F7",
width:186,
height:192,
borderRadius:15,
marginRight:24,
marginBottom:44
    
  },
  woman1:{
width:151,
height:132,
display:"flex",
justifyContent:"center",
alignItems:"center"

  },
  woman2:{
    width:151,
    height:132,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
    
      },
      exercise:{
fontWeight:700,
fontSize:16,
marginLeft:16,
marginTop:14,
marginBottom:2
      },
      tasks:{
fontWeight:400,
fontSize:12,
marginLeft:16

      },
      cates:{
        backgroundColor:"#F7F0E8",
        paddingTop:40,
        paddingLeft:20,
        paddingBottom:100
      },
      cat:{
        fontWeight:700,
        fontSize:20,
        marginBottom:12,
      }
})