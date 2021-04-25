import React, { useContext } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Context } from "../context/Blogcontext"
import { Entypo } from "@expo/vector-icons"

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id")
  const { state } = useContext(Context)

  const blogpost = state.find((blogpost) => blogpost.id === id)
  return (
    <View>
      <Text style={style.text}>{blogpost.title}</Text>
    </View>
  )
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <Entypo name="edit" size={24} color="black" />
      </TouchableOpacity>
    ),
  }
}

const style = StyleSheet.create({ text: { fontSize: 18 } })

export default ShowScreen
