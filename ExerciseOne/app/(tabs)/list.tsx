import { 
  StyleSheet, 
  Text,
   View,
   SafeAreaView, 
   ScrollView, 
   StatusBar,
  FlatList,
  SectionList
  } from 'react-native'
import React from 'react'
import pokemanList from '@/data.json'
import pokeman from '../components/Pokeman'
import groupedPokemanList from '@/grouped-data.json'

const list = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
        {
          pokemanList.map(pokeman =>{
            console.log(pokeman.id)
            return(
              <View style={styles.card} key={pokeman.id}>
                <Text style={styles.text}>{pokeman.type}</Text>
                <Text style={styles.text}>{pokeman.name}</Text>

              </View>
            )
          })
        }
      </ScrollView> */}

      {/* <FlatList data={pokemanList}
      renderItem={({item}) =>{
        console.log(item.id)
      return(
        <View style={styles.card} key={item.id}>
                <Text style={styles.text}>{item.type}</Text>
                <Text style={styles.text}>{item.name}</Text>

              </View>
      )
      }}

      keyExtractor={(item, index) => item.id.toString()}

      ItemSeparatorComponent={<View style={{height: 12}}/>}

      ListEmptyComponent={<Text style={styles.found}>No items found</Text>}
      ListHeaderComponent={<Text>Pokeman List</Text>}
      ListFooterComponent={<Text>End of List</Text>}

      /> */}
      <SectionList sections={groupedPokemanList}
      renderItem={({ item })=>{
        return(
          <View style={styles.card}>
            <Text style={styles.text}>{item}</Text>
          </View>
        )
      }}

      renderSectionHeader={({section})=>
        <Text style={styles.sectionHeaderText}>{section.type}</Text>
      }
SectionSeparatorComponent={() =>
<View style={{height:16}}/>
}

ItemSeparatorComponent={()=>
  <View style={{height:8}}/>
}
      style={styles.scrollView}
      />
    </SafeAreaView>
  )
}

export default list

const styles = StyleSheet.create({
  container:{
  flex:1,
  backgroundColor:"#f5f5f5",
paddingTop: StatusBar.currentHeight,

  },
  scrollView:{
    paddingHorizontal:16
  },
  card:{
    backgroundColor:"white",
    borderWidth:1,
    borderRadius:8,
    padding:16,
    // margin:16
  },
  text:{
    fontSize:24
  },
  found:{
    justifyContent:"center",
    alignItems:"center",
    fontSize:50,
    color:"#333",
    textAlign:"center",
    paddingVertical:300,
    fontWeight:"bold"
  },
  sectionHeaderText:{
    fontSize:30,
    fontWeight:"bold"
  }
})