import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  StatusBar
} from 'react-native';

import Login from './src/pages/Login';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
        backgroundColor="#1c313a" 
        barStyle="light-content"/>
        
        <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#455a64',
  },
});
