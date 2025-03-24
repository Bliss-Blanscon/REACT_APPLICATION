import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

const person = require("@/assets/images/person.png")
const Filter = require('@/assets/images/filter.png')



const index = () => {
  return (
    <View style={styles.container}>
      

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
            <Text>Categories</Text>
          </View>

          {/* Category Templates */}
          <View>
            
          </View>

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
  }
  
  
})