import React, { useState } from 'react'
import { View , Text, StyleSheet, TextInput, Button } from 'react-native'

const BlogPostForm = ( {onSubmit, initialValue} ) => {
  const [title, setTitle] = useState(initialValue.title)
  const [content, setContent] = useState(initialValue.content)
  return (
    <View>
      <Text style={style.label}>Enter Title</Text>
      <TextInput
        style={style.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={style.label}>Enter Content</Text>
      <TextInput
        value={content}
        style={style.input}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Save Blog Post"
        onPress={() => onSubmit(title,content)}
      />
    </View>
  )
}

BlogPostForm.defaultProps = {
    initialValue: {
        title: '',
        content: ''
    }
}

const style = StyleSheet.create({
  input: {
    borderWidth: 1,
    fontSize: 18,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: { fontSize: 20, marginBottom: 5 },
})
export default BlogPostForm
