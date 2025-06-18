import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screens from "./(tabs)/Screens";
import About from "./(tabs)/About";
import assign from "./(tabs)/assign";
import flatList from "./(tabs)/flatList";

const Stack = createNativeStackNavigator();

export default function index() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={Screens} options={{headerShown:false}} />
        <Stack.Screen name="About" component={About} options={{headerShown:false}}/>
        <Stack.Screen name="Assign" component={assign} options={{headerShown:false, title:"Assign"}}/>
        <Stack.Screen name="FlatList" component={flatList} options={{headerShown:false, title:"FlatList"}}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}