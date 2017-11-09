import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Component1 from './app/Components/Component1';
import Component2 from './app/Components/Component2';
import Component3 from './app/Components/Component3';
import Component4 from './app/Components/Component4';
import Component5 from './app/Components/Component5';

export default class myapp extends Component{
  render(){
    return (
      <View>
        <Component1 message="Hello"/>
        <Component2 />
        <Component3 />
        <Component4 />
        <Component5 />
      </View>
      )
  }
}

AppRegistry.registerComponent('myapp', () => myapp);