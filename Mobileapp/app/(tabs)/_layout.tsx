import { ImageBackground, ImageBase, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'


const _layout = () => {
  return (
<Tabs>
  <Tabs.Screen
name='index'
options={{headerShown: false,
  title: 'Home',
  tabBarIcon: ({ focused }) =>(
    <>
   <ImageBackground>


   </ImageBackground>

 



   
  
    </>
  )
}}

  
  />



<Tabs.Screen
name='Categories'
options={{headerShown: false,
  title: 'Categories',
  tabBarIcon: ({ focused }) =>(
    <>
   

 



   
  
    </>
  )
}}

  
  />
</Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})