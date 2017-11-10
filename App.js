import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Component1 from './app/Components/Component1';
import Component2 from './app/Components/Component2';
import Component3 from './app/Components/Component3';
import Component4 from './app/Components/Component4';
import CameraComp from './app/Components/CameraComp';
import SimgleImage from './app/Components/SingleImage';
import { Action, Router, Scene } from 'react-native-router-flux';

export default class main extends Component{
  render(){
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={ CameraComp } />
          <Scene key="singleImage" component={ SingleImage } />
        </Scene>
      </Router>
      )
  }
}

AppRegistry.registerComponent('main', () => main);