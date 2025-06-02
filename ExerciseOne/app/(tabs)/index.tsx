import React from 'react'
import { ScrollView, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import Pokeman from '../components/Pokeman'



const index = () => {
  const charnder = {
    name: "Charmender",
    hp: "🤎HP, 39",
    moves: ["Even, Tend, Tent, Pamela, Precious, Weak"],
    type: "🔥 Fire",
    image: require("@/assets/images/favicon.png"),
    weaknesses: ["Saa, Ran, Cold"],
    onPress: () => alert("Hi there, You are welcome to my Pokeman Card")
  }

  return (
    <ScrollView>
      <StatusBar barStyle={"light-content"} backgroundColor={"black"} />
      <SafeAreaView style={styles.container}>
        <Pokeman {...charnder} />
        <Pokeman {...charnder} />
        <Pokeman {...charnder} />
        <Pokeman {...charnder} />
        <Pokeman {...charnder} />
        <Pokeman {...charnder} />
        <Pokeman {...charnder} />
        <Pokeman {...charnder} />
        <Pokeman {...charnder} />


      </SafeAreaView>
    </ScrollView>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === 'android' ? 20 : 0,

  }
})