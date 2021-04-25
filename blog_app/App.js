import React from "react"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { Provider } from "./src/context/Blogcontext"
import CreateScreen from "./src/screen/Createscreen"
import EditScreen from "./src/screen/EditScreen"
import IndexScreen from "./src/screen/indexScreen"
import ShowScreen from "./src/screen/ShowScreen"

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen,
  },
  { initialRouteParams: "Index", defaultNavigationOptions: { title: "blog" } }
)

const App = createAppContainer(navigator)

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}
