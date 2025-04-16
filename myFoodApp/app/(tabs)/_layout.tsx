import { Stack, Tabs } from "expo-router";

export default function RootLayout() {
  return <Tabs>
    <Tabs.Screen
    name="flex"
    options={{headerShown: false,
      title:"home"
    }}
    />
    <Tabs.Screen
    name="index"
    options={{headerShown:false,
      title:"About"
    }}
    />
    <Tabs.Screen
    name="dynamic"
    options={{headerShown:false,
      title: "Dynamics"
    }}
    />
  </Tabs>;
  
}
