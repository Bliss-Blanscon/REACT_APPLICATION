import { FlatList, SafeAreaView, StatusBar, StyleSheet, View, Text, ActivityIndicator, TextInput, Button } from 'react-native'
import { useState, useEffect } from 'react'
import React from 'react'

const networking = () => {
  const [postList, setPostList] = useState([])
const [isLoading, setisLoading] = useState(true)
const [refreshing, setRefreshing] = useState(false)
const [postTitle, setPostTitle] = useState("")
const [postBody, setPostBody] = useState("")
const [isPosting, setIsPosting] = useState(false)
const [error, setError] = useState("")




  const fetchData = async (limit =10) =>{
    try{
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
      const data = await response.json()

      setPostList(data)
     setisLoading(false)
     setError("")
     }catch(error){
console.error("Error fetching data", error)
setisLoading(false)
setError("Failed to post list")
     }
  }; 

  useEffect(()=>{
    fetchData();
  }, []);

  const handleRefreshing = () =>{
    setRefreshing(true)
    fetchData(20 )
    setRefreshing(false)
  }

  const addPost = async()=> {
setIsPosting(true)

try{
const response = await fetch(`https://jsonplaceholders0.typicode.com/posts`, {
  method:'post',
  headers:{
"Content-Type":"application/json"
  },
  body: JSON.stringify({
    title:postTitle,
    body: postBody
  })
})


const newPost = await response.json()
setPostList([newPost, ...postList])
setPostTitle("")
setPostBody("")
setIsPosting(false)
setError("")
} catch(error){
  console.error("Error adding new post")
  setError("Failed to add new post")
}
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
{error ?(
  <View style={styles.errorContainer}>
    <Text style={styles.errorText}>{error}</Text>
  </View>
  ):(
  <>

    
    <View style={styles.inputContainer}>

      <TextInput style={ styles.postTitle} value={postTitle} onChangeText={setPostTitle} placeholder='Post Title'/>
      <TextInput style={ styles.postTitle} value={postBody} onChangeText={setPostBody} placeholder='Post Body'/>
      <Button title={isPosting ? "Adding..." : "Add post"}  onPress={addPost} disabled={isPosting}/>

    </View>



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
    </>)}

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
},
inputContainer:{
  borderWidth:1,
padding:16,
borderRadius:8,
backgroundColor:"white",
margin:16,
},
postTitle:{
height:40,
borderColor:"gray",
borderWidth:1,
marginBottom:8,
padding:8,
borderRadius:8,
},
errorContainer:{
  backgroundColor: "#ffc0cb",
  padding:16,
  margin:16,
  borderRadius:8,
  borderWidth:1,
  alignItems:"center"
},
errorText:{
  color:"#d8000c",
  fontSize:16,
  textAlign:"center"
}
})