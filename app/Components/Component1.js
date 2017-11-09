import React, { Component } from 'react';
import { AppRegistry, Text, View, Platform } from 'react-native';

export default class Component1 extends Component{
  render(){
    return (
      <View>
        <Text>Nadim's first {(Platform.OS == 'ios') ? 'iOS':'Android'} App!</Text>
        <Text>Can you see me now????</Text>
        <Text>{this.props.message}</Text>
      </View>
      )
  }
}

AppRegistry.registerComponent('Component1', () => Component1);