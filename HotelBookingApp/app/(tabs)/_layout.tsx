import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
   <Tabs>
    <Tabs.Screen
    name='Screens'
    options={{headerShown: false,
      title:"Home"
    }}
    />
     <Tabs.Screen
    name='About'
    options={{headerShown: false,
      title:"About"
    }}
    />
   </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})