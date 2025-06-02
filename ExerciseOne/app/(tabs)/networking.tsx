import { FlatList, SafeAreaView, StatusBar, StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import { useState, useEffect } from 'react'
import React from 'react'

const networking = () => {
  const [postList, setPostList] = useState([])
const [isLoading, setisLoading] = useState(true)
const [refreshing, setRefreshing] = useState(false)


  const fetchData = async (limit =10) =>{
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
      const data = await response.json()

      setPostList(data)
     setisLoading(false)
  }; 

  useEffect(()=>{
    fetchData();
  }, []);

  const handleRefreshing = () =>{
    setRefreshing(true)
    fetchData(20 )
    setRefreshing(false)
  }

if(isLoading){
  return(
    <SafeAreaView style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="0000fff" animating={true}/>
      <Text style={{color:"#f5f5f5", fontSize:24 }}>Loading.....😒😒😒</Text>
    </SafeAreaView>
  )
}
  return (
   <SafeAreaView style={styles.container}>
    <>
    <View style={styles.listContainer}>
<FlatList
data={postList}
renderItem={({item}) => {
  return(
    <View style={styles.card}>
<Text style={styles.titleText}>{item.title}</Text>
<Text style={styles.bodyText}>{item.body}</Text>

    </View>
  )
  }
}

ListHeaderComponent={<Text style={styles.headerText}> Post List</Text>}
ListFooterComponent={<Text style={styles.headerText}> End of List</Text>}
ListEmptyComponent={<Text style={styles.emptyText}> No Post Found</Text>}
ItemSeparatorComponent={<View style={{height:16}}/>}

refreshing={refreshing}
onRefresh={handleRefreshing}
/>
    </View>
    </>

   </SafeAreaView>
  )
}

export default networking

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f5f5f5",
    paddingTop:StatusBar.currentHeight
  },
  listContainer:{
flex:1,
paddingHorizontal:16
  },
card:{
borderWidth:1,
padding:16,
borderRadius:8,
backgroundColor:"white",
},
titleText:{
  fontSize:30,
},
bodyText:{
  fontSize:24,
  color:"#666666"
},
headerText:{
fontSize:24,
textAlign:"center",
marginBottom:12,
},
loadingContainer:{
  paddingTop:StatusBar.currentHeight,
  flex:1,
  justifyContent:"center",
  alignItems:"center",
  backgroundColor:"black"
}
})