import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router'

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
      name='index'
      options={{headerShown:false,
      title:"Home"        
      }}
      />

      <Tabs.Screen
      name='list'
      options={{headerShown:false,
        title:"List"
      }}
      />

      <Tabs.Screen
      name='form'
      options={{headerShown:false,
        title:"Forms"
      }}
      />

      <Tabs.Screen
      name='newForm'
      options={{headerShown:false,
        title:"Login"
      }}
      />

      <Tabs.Screen
      name='networking'
      options={{headerShown:false,
        title:"Network"
      }}
      />

      <Tabs.Screen
      name='Navigation'
      options={{headerShown:false,
        title:"Navigation"
      }}
      />
      </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})