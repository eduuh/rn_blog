import createDataContext from "./createDataContext"
import jsonServer from "../api/JsonServer"

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_Blogpost":
          return action.payload
    case "edit_blogPost":
          return state.map((blogpost) => {
            return blogpost.id === action.payload.id ? action.payload : blogpost
          })
    case "delete_blogpost":
      return state.filter((blogpost) => blogpost.id !== action.payload)
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content
        },
      ]
    default:
      return state
  }
}

const getBlogpost = dispatch => {
    return async () => {
     var response = await jsonServer.get("/blogpost")
      //respones.data = []
      dispatch({type: 'get_Blogpost', payload: response.data})
    }
}

const addblogPost = (dispatch) => {
    return async(title, content, callback) => {
        await jsonServer.post("/blogpost", {title, content})
        // dispatch({ type: "add_blogpost", payload: {title, content} })
        if(callback)callback()
  }
}

const deleteBlogPost = (dispatch) => {
  return async(id) => {
      await jsonServer.delete(`/blogpost/${id}`)
      dispatch({ type: "delete_blogpost", payload: id })
  }
}

const editBlogPost = (dispatch) => {
    return async(id, title, content, cb) => {
        // dispatch({type: "edit_blogPost", payload: { id, title, content }})
        await jsonServer.put(`/blogpost/${id}`, {title, content})
        if(cb)cb()
    }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addblogPost, deleteBlogPost , editBlogPost, getBlogpost},
  []
)
