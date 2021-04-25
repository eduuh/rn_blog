import React, { useContext, useEffect } from "react"
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native"
import { Context } from "../context/Blogcontext"
import { Feather } from "@expo/vector-icons"


const IndexScreen = ({ navigation }) => {
    const { state, addblogPost, deleteBlogPost, getBlogpost } = useContext(Context)

   useEffect(()=> {
     getBlogpost()
      const listener = navigation.addListener('didFocus', () => {
                getBlogpost()
       })
       return () =>{
         listener.remove();
       }
    }, [])
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogpost) => blogpost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("Show", { id: item.id })}>
              <View style={style.row}>
                <Text style={style.text}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={style.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

IndexScreen.navigationOptions = ( {navigation} ) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={()=> navigation.navigate("Create")}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  }
}
const style = StyleSheet.create({
  row: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "gray",
    justifyContent: "space-between",
  },
  icon: { fontSize: 23 },
  text: {fontSize: 18}
})
export default IndexScreen
