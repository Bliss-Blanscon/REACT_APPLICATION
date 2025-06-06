import * as React from 'react'
import { NavigationContainer  } from '@react-navigation/native'
import {createNativeStackNavigator } from "@react-navigation/native-stack"
import { Stack } from 'expo-router'

export default function Navigation(){
  return(
    <NavigationContainer>{/* Rest of your app code*/}
    <Stack.Navigator>
      <Stack.Screen name='Home'/>
    </Stack.Navigator>
    
    </NavigationContainer>
  )
}