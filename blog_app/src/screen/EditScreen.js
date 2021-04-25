import React, { useContext } from "react"
import { StyleSheet } from "react-native"
import BlogPostForm from "../components/BlogPostForm"
import { Context } from "../context/Blogcontext"

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id")
  const { state, editBlogPost } = useContext(Context)
  const blogpost = state.find((blogpost) => blogpost.id === id)
  return (
    <BlogPostForm
      initialValue={{ title: blogpost.title, content: blogpost.content }}
      onSubmit={(title, content) => {
          editBlogPost(id, title,content, () => navigation.pop())
      }}
    />
  )
}

const style = StyleSheet.create({})

export default EditScreen
