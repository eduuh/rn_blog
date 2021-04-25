import React, { useContext, useState } from "react"
import {StyleSheet} from "react-native"
import BlogPostForm from "../components/BlogPostForm"
import { Context } from "../context/Blogcontext"

const CreateScreen = ({navigation}) => {
  const {addblogPost} = useContext(Context)
    return <BlogPostForm  onSubmit={(title, content)=> { addblogPost(title, content, ()=> navigation.navigate("Index")) }}/>

}

const style = StyleSheet.create({})
export default CreateScreen
