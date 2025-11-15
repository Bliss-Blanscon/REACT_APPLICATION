import { StyleSheet,
  Text,
   View, 
   ScrollView, 
   StatusBar,
   Image,
   ImageBackground,
   Button,
   Pressable,
   TextInput,
  } from "react-native";

export default function Index() {
  return (
    <ScrollView style={styles.container}>
    <StatusBar barStyle={'dark-content'} backgroundColor={'white'}/>
{/* Heading  */}
    <View style={styles.medicalView1}>
      <View style={styles.medicalSearch}><Text style={styles.med}>MED<Text style={styles.dical}>DICAL</Text></Text>
      <Image style={styles.searchbtn} source={require('@/assets/images/search.png')}/>
      <Image style={styles.threelines} source={require('@/assets/images/threeLines.png')}/>

      </View>
    </View>
    {/* end of Heading */}


{/* Our services */}
    <View>
      <ImageBackground style={styles.doctorpic} source={require('@/assets/images/section2Doctor.png')}>
    <Text style={styles.caring}>CARING FOR LIFE</Text>  
    <Text style={styles.leading}>Leading the Way</Text> 
     <Text style={styles.leading}>in Medical Excellence</Text>  

     <Pressable onPress={()=> alert('Relax Bro...!')} style={styles.ourServices}>
        <Text style={styles.serviceText}>Our Services</Text>
      </Pressable>
</ImageBackground>
    </View>
    {/* End of our services */}

<View>
  <View style={styles.welcomeM}>
      <Text style={styles.welcomeText}>WELCOME TO MEDDICAL</Text>
      <Text style={styles.welcomeText1}>A Great Place to</Text>
      <Text style={styles.welcomeText1}>Receive Care</Text>
  </View>
<View><Text style={styles.lorem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consectetur similique, temporibus at, placeat, labore iusto libero omnis iure rerum nobis repellendus. Nostrum autem quod ab. Ea hic nam aperiam.</Text></View>

<Pressable style={styles.learn} onPress={()=> alert('Let me teach you dear')}>
  <Text style={styles.learnText}>Learn More</Text>
  <Image style={styles.learnImage} source={require('@/assets/images/arrow.png')}/>
</Pressable>
</View>

{/* man */}
<View>
<Image source={require('@/assets/images/man.png')} style={styles.man}/>
</View>
{/* End of Man */}


{/* Care Section */}
<View>
  <View style={styles.careYou}>
    <Text style={styles.careYou1}>CARE YOU CAN BELIEVE IN</Text>
    <Text style={styles.careYou2}>Our Services</Text>
  </View>
</View>
{/* End of care section */}

{/* Box, cardio */}
<View style={styles.viewForBoxes}>
  <View style={styles.boxCheck}>
    <View style={styles.freeCheckup}>
    <Image source={require('@/assets/images/checkup.png')}/>
    <Text style={{
      marginTop:8,
      fontWeight:"400"
    }
    }>Free Checkup</Text>
 </View>

<View style={[styles.freeCheckup11]}>
<View style={[styles.freeCheckup1]}>
 <Image source={require('@/assets/images/cardio.png')}/>
    <Text style={{
        color:'rgba(191, 210, 248, 1)',
      marginTop:8,
      fontWeight:"400",
        }
    }>Cardiogram</Text>
</View>
  </View>
</View>

<View style={styles.boxCheck}>
  <View style={styles.freeCheckup}>
    <Image source={require('@/assets/images/DNA.png')}/>
    <Text style={{
      marginTop:8,
      fontWeight:"400"
    }
    }>Dna Testing</Text>
</View>

<View style={styles.freeCheckup1}>
    <Image source={require('@/assets/images/blood.png')}/>
    <Text style={{
      marginTop:8,
      fontWeight:"400"
    }
    }>Blood Bank</Text>

 </View>   
  </View>

  <Pressable style={{
  backgroundColor:'rgba(31, 43, 108, 1)',
  paddingTop:12,
  paddingBottom:12,
  }}  
  onPress={()=> alert('Keep clicking')}
  >
    
    <Text style={{
    textAlign:"center",
  color:'rgba(191, 210, 248, 1)',
    
  }}>View All</Text></Pressable>
</View>
{/* end of box, cardio */}

<View style={[styles.careYou, styles.alwaysC]}>
  <Text style={styles.careYou1}>ALWAYS CARING</Text>
  <Text style={styles.careYou2}>Our Specialities</Text>
</View>

{/* Book an Appointment */}
<ImageBackground style={{width:375, height:1001,}} source={require('@/assets/images/manShadow.png')}>
<View style={{paddingHorizontal:11,
  paddingBottom:48
}}>
<Text style={{paddingTop:64,
  textAlign:"center",
  fontSize:24,
  color:"rgba(21, 158, 236, 1)",
  fontWeight:"bold",
  marginBottom:16
}}>Book an Appointment</Text>
<Text
style={{
  textAlign:"center",
  fontSize:16
}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quae corrupti, molestias placeat aliquam vel nulla voluptatem nihil dolor laborum at, harum, architecto perferendis cumque similique. Alias omnis architecto ratione.</Text>

<View style={{marginTop:48}}>
  <TextInput style={{backgroundColor:"rgba(31, 43, 108, 1)",
    width:343,
    height:50,
    paddingLeft:20,
    borderRadius:5,
    color:"rgba(191, 210, 248, 1)",
    marginBottom:1
  }} value="Name" placeholder="Name" autoCorrect />

   <TextInput style={{backgroundColor:"rgba(31, 43, 108, 1)",
    width:343,
    height:50,
    paddingLeft:20,
    borderRadius:5,
    color:"rgba(191, 210, 248, 1)",
    marginBottom:1
  }} value="Email" placeholder="Email" autoCorrect />

  <TextInput style={{backgroundColor:"rgba(31, 43, 108, 1)",
    width:343,
    height:50,
    paddingLeft:20,
    borderRadius:5,
    color:"rgba(191, 210, 248, 1)",
    marginBottom:1
  }} value="" placeholder="Email" autoCorrect />

  <TextInput style={{backgroundColor:"rgba(31, 43, 108, 1)",
    width:343,
    height:50,
    paddingLeft:20,
    borderRadius:5,
    color:"rgba(191, 210, 248, 1)",
    marginBottom:1
  }} value="Email" placeholder="Email" autoCorrect />

  <TextInput style={{backgroundColor:"rgba(31, 43, 108, 1)",
    width:343,
    height:50,
    paddingLeft:20,
    borderRadius:5,
    color:"rgba(191, 210, 248, 1)",
    marginBottom:1
  }} value="Email" placeholder="Email" autoCorrect />

  <TextInput style={{backgroundColor:"rgba(31, 43, 108, 1)",
    width:343,
    height:50,
    paddingLeft:20,
    borderRadius:5,
    color:"rgba(191, 210, 248, 1)",
    marginBottom:1
  }} value="Email" placeholder="Email" autoCorrect />

  <TextInput style={{backgroundColor:"rgba(31, 43, 108, 1)",
    width:343,
    height:50,
    paddingLeft:20,
    borderRadius:5,
    color:"rgba(191, 210, 248, 1)",
    marginBottom:1
  }} value="Email" placeholder="Email" autoCorrect />

  <TextInput style={{backgroundColor:"rgba(31, 43, 108, 1)",
    width:343,
    height:50,
    paddingLeft:20,
    borderRadius:5,
    color:"rgba(191, 210, 248, 1)",
    marginBottom:1
  }} value="Email" placeholder="Email" autoCorrect />
  
  <TextInput style={{backgroundColor:"rgba(31, 43, 108, 1)",
    width:343,
    height:50,
    paddingLeft:20,
    borderRadius:5,
    color:"rgba(191, 210, 248, 1)",
    marginBottom:1
  }} value="Email" placeholder="Email" autoCorrect />
</View>

<Pressable style={{
  backgroundColor:'rgba(191, 210, 248, 1)',
  width:343,
    height:50,
    paddingLeft:20,
    borderRadius:5,
 alignItems:"center",
 justifyContent:"center",
  }}  
  onPress={()=> alert('Keep clicking')}
  >
    
    <Text style={{
    textAlign:"center",
color:'rgba(31, 43, 108, 1)',
fontWeight:"bold"    
  }}>SUBMIT</Text></Pressable>

</View>

</ImageBackground>
{/* End of Book an Appointment */}


{/* Doctors Roles */}
<View style={{
  marginTop:48,
  marginBottom:48
}}>

  <View style={[styles.careYou]}>
    <Text style={styles.careYou1}>TRUSTED CARE</Text>
  <Text style={styles.careYou2}>Our Doctors</Text>
  </View>


{/* Image view and texts */}
  <View>
    <Image style={{width:254,
      height:281,
    }} source={require('@/assets/images/doctor1.png')}/>

    <View>
      <View style={{
        width:254,
        height:110,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'rgba(191, 210, 248, 1)',
      }}>
        <Text style={{
          color:'rgba(31, 43, 108, 1)',
          fontSize:18
        }}>Doctor's Name</Text>


        <Text style={{
          color:'rgba(31, 43, 108, 1)',
          fontWeight:"bold",
          letterSpacing:4,
          fontSize:20,
          paddingBottom:8
        }}>NEUROLOGY</Text>


<View style={{display:"flex",
  flexDirection:"row",
justifyContent:"center",
alignItems:"center",
}}>
<Image style={{
  marginRight:20
    }} source={require('@/assets/images/linkedin.png')}/>

<Image style={{
    marginRight:20

    }} source={require('@/assets/images/fb.png')}/>


<Image style={{
    }} source={require('@/assets/images/insta.png')}/>

</View>
      </View>
    </View>


{/* View Profile */}
<Pressable style={{
  width:254,
  height:46,
  alignItems:"center",
  justifyContent:"center",
  backgroundColor:'rgba(31, 43, 108, 1)',
}}>
  <Text style={{
    textAlign:"center",
    color:'rgba(191, 210, 248, 1)',
  }}>View Profile</Text>
</Pressable>
  </View>
  {/* end of image view */}
</View>


    </ScrollView>
   
  );
}
 const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:"white",
  alignContent:"center",

},

medicalView1:{
  width:375,
  height:70,
  paddingHorizontal:19,
  backgroundColor:'rgba(31, 43, 108, 1)',
  justifyContent:"center",
  alignSelf:"center"
},
med:{
  fontSize:28,
  color:'rgba(191, 210, 248, 1)',
  fontWeight:"bold"
},
dical:{
  color:"white"
},
searchbtn:{
position:'absolute',
marginLeft:260

},
threelines:{
position:'absolute',
marginLeft:315

},
medicalSearch:{
justifyContent:"center"
},
doctorpic:{
width:410,
height:291,
position:"relative",
borderWidth:1
},

caring:{
  textAlign:"center",
  fontSize:14,
  fontWeight:"bold",
  letterSpacing:4,
  color:"rgba(21, 158, 236, 1)",
  marginTop:118
},
leading:{
  fontSize:24,
  letterSpacing:2,
  color:"rgba(31, 43, 108, 1)",
  fontWeight:"bold",
  textAlign:"center"
},

ourServices:{
  width:170,
  height:45,
  paddingTop:13,
  paddingBottom:13,
  paddingLeft:35,
  paddingRight:35,
backgroundColor:"rgba(191, 210, 248, 1)",
alignItems:"center",
borderRadius:50,
justifyContent:"center",
alignSelf:"center",
marginTop:24,
marginBottom:32
},
serviceText:{
  fontSize:16,
  color:"rgba(31, 43, 108, 1)",
  fontWeight:"500"
},
welcomeM:{
  paddingTop:48,
  justifyContent:"center",
  alignItems:"center"
},
welcomeText:{
  fontSize:14,
  fontWeight:"bold",
  letterSpacing:3,
  color:"rgba(21, 158, 236, 1)",
    paddingBottom:8,
},
welcomeText1:{
  fontSize:24,
  color:"rgba(31, 43, 108, 1)",
  fontWeight:"500"
},
lorem:{
  fontSize:16,
  paddingHorizontal:16,
  paddingTop:8
},
learn:{
  alignItems:"center",
  paddingTop:16,
},
learnText:{
  color:"rgba(21, 158, 236, 1)"
},
learnImage:{
position:'absolute',
marginLeft:110,
marginTop:21
},

man:{
  marginTop:48,
  marginBottom:48,
  objectFit:'contain'
},
careYou:{
  justifyContent:"center",
  alignItems:"center",
  marginBottom:24
},
careYou1:{
  fontSize:14,
  fontWeight:"bold",
  letterSpacing:3,
  color:"rgba(21, 158, 236, 1)"
},
careYou2:{
  fontSize:24,
  fontWeight:"500",
  color:"rgba(31, 43, 108, 1)",
},
boxCheck:{
  display:"flex",
  flexDirection:"row"
},
freeCheckup:{
  alignItems:"center",
  marginLeft:32,
  marginBottom:44,
  marginRight:32,
  marginTop:22,
},
freeCheckup1:{
  alignItems:"center",
  marginLeft:32,
  marginBottom:44,
  marginRight:32,
  marginTop:22,
},
viewForBoxes:{
  borderWidth:1,
  marginLeft:18,
  marginRight:18,
  borderColor:"rgba(176, 175, 175, 1)",
  borderRadius:5 ,
  marginBottom:48
},
freeCheckup11:{
backgroundColor:"rgba(31, 43, 108, 1)",
width:174,
height:106,
borderRadius:5
},
alwaysC:{
  marginBottom:74
}
 })
