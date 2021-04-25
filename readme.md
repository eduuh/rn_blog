#### Workflow.

### Technologies

1. React Native
2. JsonServer
3. ngrok

### What you can Learn From this

1. Using Local State with **useContext** hook from react.
2. Using props to pass data between parent and child.
3. React Native navigation
4. Reusable Components.
5. Working with and external api. Here I used **jsonserver**.
6. React hooks: **useState(), useReducer(), useContext()**

### setup

To run the android application. You will need the commmand.

Navigate into the reactnative directory.

```bash
cd blog_app
```

Install all the dependecies.

```bash
npm install
```

Start the application.

```bash
npm run start
```

### JsonServer and Ngrok

Your physical device will not be able to connect to the jsonserver running on the local port **3000**.
The easiest setup to get the android device working with your api is to have the api exposed to the internet and to that we use the application called ngrok.

The scripts are written in the package.json file in the jsoserver folder.

First navigate into the folder.

````bash
cd jsonserver
```

Install all the dependecies.

```bash
npm install
```

Start the JsonServer.

```bash
npm run db
````

start the ngrok server.

```bash
npm run tunnel
```

### Setting up ReactNative With the JsonServer.

Note: we are exposing the jsonserver using **ngrok**. Ngrok provide a tunnel that expires after 8 hours.

The ngrok url changes every time you restart the ngrok process. Therefor you will need to constantly update the base url with the new ngrok url.

Navigate to the file **/blog_app/src/api/** and update the url with the ngrok url you have.

```javascript
import axios from "axios"

export default axios.create({
  baseURL: "http://1b231d8a9d9c.ngrok.io",
})
```
