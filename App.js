import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Splash from "./components/Splash"
import Login from "./components/Login"

class Main extends Component {
  constructor(props) {
    super(props);
      this.state = { currentScreen: 'Splash'};
      console.log('Start doing some tasks for about 3 seconds')
      setTimeout(()=> {
        console.log('Done some tasks for about 3 seconds')
        this.setState({ currentScreen: 'Login'})
      }, 3000)
  }
  render() {
    const { currentScreen } = this.state
    let mainScreen = currentScreen === 'Splash' ? <Splash /> : <Login/>
    return mainScreen
  }
}

export default function App() {
  return (
    <Main />
  )
}