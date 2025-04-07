import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

const person = require("@/assets/images/person.png")
const Filter = require('@/assets/images/filter.png')
const Woman1 = require('@/assets/images/young woman working online.png')
const Woman2 = require('@/assets/images/young woman working at desk.png')

const index = () => {
  return (
    <ScrollView style={styles.container}>
    <View >
      <StatusBar barStyle={"light-content"} backgroundColor={"black"}/>

      {/* header for Hello Devs */}
        <View style={styles.header}>

          {/* TextView */}
            <View>
                <Text style={styles.devs}>Hello , Devs</Text>
                <Text style={styles.task}>14 tasks today</Text>
              </View>


              {/* Profile Image View */}
              <View style={styles.person}>
                  <TouchableOpacity>
                     <Image source={person}/>
                  </TouchableOpacity>
              </View>

        </View>



        {/* Search portion */}
        <View style={styles.searchPortion}>

          {/* text input session */}
          <TextInput
          placeholder='Search'
          style={styles.Input}
        />

        
                <TouchableOpacity style={styles.filter}>
                <Image source={Filter}/>
                </TouchableOpacity>
                
                <Feather name="search" size={24} color="black" style={styles.searchIcon} />

        </View>


{/* Categories Section */}
        <View style={styles.categorySec}>
          <View>
            <Text style={styles.catText}>Categories</Text>
          </View>

          {/* Category Templates */}
          <View style={styles.catImages}>
            <View style={styles.woman11}>
              <View style={styles.texts}>
                <Text style={styles.exercise}>Exercise</Text>
                <Text style={styles.subExercise}>12 Tasks</Text>
              </View>
<Image source={Woman1} style={styles.woman1}/>
</View>

<View style={styles.woman111}>
<View style={styles.texts}>
                <Text style={styles.exercise}>Study</Text>
                <Text style={styles.subExercise}>12 Tasks</Text>
              </View>
<Image source={Woman2}/>
</View>
          </View>

        </View>


        {/* Ongoing View Section */}
        <View style={styles.ongoing_view}>
          <View>
            <Text style={styles.taskon}>Ongoing Task</Text>
          </View>
        <TouchableOpacity>
          <View style={styles.ongoing}>
              <Text style={styles.mainon}>Mobile App Development</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.ongoing}>
              <Text style={styles.mainon}>Web Development</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View  style={styles.ongoing}>
              <Text style={styles.mainon}>Push Ups</Text>
            </View>
            </TouchableOpacity>
        </View>




    </View>
    </ScrollView>
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#F7F0E8',
    width:393,
    height:852,
    borderRadius: 30,
    paddingTop:52,
    paddingLeft:20,
    
  },
  header:{
    marginRight:19,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
      },
  devs:{
fontFamily: 'Lato',
fontWeight: 700,
fontSize: 32,
  },
  task:{
    fontFamily: 'lato',
    fontWeight: 500,
    fontSize: 12,
  },
  person:{
    width:50,
    height:52,
    backgroundColor:'white',
    borderRadius:100,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  Input:{
    width:280,
    height:48,
    borderWidth:1,
    backgroundColor:'#FBF9F7',
    paddingLeft:45,
    borderRadius:14,
   
    borderColor:'#FBF9F7',
    fontWeight:700,
    fontSize:16
  },
  searchPortion:{
    display:'flex',
    flexDirection:'row', 
    alignItems:'center',
    justifyContent:'space-between',
    marginRight:20,
    marginTop:30
  },
  filter:{
    width:50,
    height:48,
    alignItems:'center',
    backgroundColor:'#F0522F',
    display:'flex',
    justifyContent:'center',
    borderRadius:14
  },
  searchIcon:{
    position:'absolute',
    marginLeft:11,
    width:24,
    height:24
  },
  categorySec:{
    marginTop:30,
    marginBottom:12,
    
  },
  catText:{
    fontWeight:700,
    fontSize:20
  },
  catImages:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:12,
    
  },
  woman11:{
    width:186,
    height:192,
    backgroundColor:'#FBF9F7',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15

    
  },
  woman1:{
    width:151,
    height:132,
    
  },
  texts:{
    width:70,
    height:35,
    marginLeft:16,
    marginTop:14,
    marginRight:111,
  
  },
  exercise:{
    fontWeight:700,
    fontSize:16
  },
  subExercise:{
    fontWeight:400,
    fontSize:12
  },
  woman111:{
    marginLeft:24,
    width:186,
    height:192,
    backgroundColor:'#FBF9F7',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15
  },
  ongoing:{
width: 354,
height:128,
paddingTop: 46,
paddingBottom:63,
paddingRight: 138,
paddingLeft:16,
borderRadius:15,
backgroundColor:"#FBF9F7",
marginTop:12,
marginRight:12,
borderWidth:1,
borderColor:"#E8D1BA"


  },
  mainon:{
fontSize:16,
color:"#000000",
fontWeight:700,

  },
  taskon:{
fontWeight:700,
fontSize:20,
paddingTop:27

  },
  ongoing_view:{
paddingRight:12

  }
  
  
})