# React Native Navigation

If you're already familiar with JavaScript, React and React Native, then you'll be able to get moving with React Navigation quickly! If not, we highly recommend you to gain some basic knowledge first, then come back here when you're done.

Here are some resources to help you out:
- [React Native Express](http://reactnativeexpress.com/) (Sections 1 to 4)
- [Main Concepts of React](https://reactjs.org/docs/hello-world.html)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React Context](https://reactjs.org/docs/context.html) (Advanced)

## Installation

Install the required packages in your React Native project:

```
npm install @react-navigation/native
```

React Navigation is made up of some core utilities and those are then used by navigators to create the navigation structure in your app.

> Note: You might get warnings related to peer dependencies after installation. They are usually caused by incorrect version ranges specified in some packages. You can safely ignore most warnings as long as your app builds.

### Installing dependencies into an Expo managed project​

In your project directory, run:

```
expo install react-native-screens react-native-safe-area-context
```

This will install versions of these libraries that are compatible.

### Installing dependencies into a bare React Native project​

In your project directory, run:

```
npm install react-native-screens react-native-safe-area-context
```

### Wrapping your app in NavigationContainer​

```
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}
```

## Native Stack Navigator

In a web browser, you can link to different pages using an anchor `<a>` tag. When the user clicks on a link, the URL is pushed to the browser history stack. When the user presses the back button, the browser pops the item from the top of the history stack, so the active page is now the previously visited page. React Native doesn't have a built-in idea of a global history stack like a web browser does -- this is where React Navigation enters the story.

React Navigation's native stack navigator provides a way for your app to transition between screens and manage navigation history. If your app uses only one stack navigator then it is conceptually similar to how a web browser handles navigation state - your app pushes and pops items from the navigation stack as users interact with it, and this results in the user seeing different screens. A key difference between how this works in a web browser and in React Navigation is that React Navigation's native stack navigator provides the gestures and animations that you would expect on Android and iOS when navigating between routes in the stack.

Let's start by demonstrating the most common navigator, `createNativeStackNavigator`.

### Installing the native stack navigator library​

The libraries we've installed so far are the building blocks and shared foundations for navigators, and each navigator in React Navigation lives in its own library. To use the native stack navigator, we need to install `@react-navigation/native-stack` :

```
npm install @react-navigation/native-stack
```

> 💡 `@react-navigation/native-stack` depends on `react-native-screens` and the other libraries that we installed in Getting started. If you haven't installed those yet, head over to that page and follow the installation instructions.

### Creating a native stack navigator​

createNativeStackNavigator is a function that returns an object containing 2 properties: Screen and Navigator. Both of them are React components used for configuring the navigator. The Navigator should contain Screen elements as its children to define the configuration for routes.

NavigationContainer is a component which manages our navigation tree and contains the navigation state. This component must wrap all navigators structure. Usually, we'd render this component at the root of our app, which is usually the component exported from App.js.

```
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```