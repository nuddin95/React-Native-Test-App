import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Component1 from './app/Components/Component1';
import Component2 from './app/Components/Component2';
import Component3 from './app/Components/Component3';
import Component4 from './app/Components/Component4';
import CameraComp from './app/Components/CameraComp';
import * as firebase from 'firebase';

const firebaseConfig ={
  apiKey: "AIzaSyCa3bPLTfp84fXJ5zUBeI6fyvgyqfKfNYU",
  authDomain: "stackathon-17f9d.firebaseapp.com",
  databaseURL: "https://stackathon-17f9d.firebaseio.com",
  projectId: "stackathon-17f9d",
  storageBucket: ""
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default class myapp extends Component{
  constructor(){
    super()
    this.state = {
      savedPics:[]
    }

    this.picturesRef = this.getRef().child('Pictures')
  }

  getRef(){
    return firebaseApp.database().ref()
  }

  componentWillMount(){
    this.getPictures(this.picturesRef)
  }

  componentDidMount(){
    this.getPictures(this.picturesRef)
  }

  getPictures(picturesRef){
    picturesRef.on('value', (pic)=>{
      let pics = [];
      pic.forEach(child => {
        pics.push({
          _key:child.key,
          mediaUri: child.val().mediaUri,
          path:child.val().path
        })
      })
      this.setState({
        savedPics:[...pics]
      })
    })
  }

  render(){
    return (
      <View>
        {/* <Component1 message="Hello"/> */}
        {/* <Component2 /> */}
        {/* <Component3 /> */}
        {<Component4 />}
        <CameraComp pics={this.state.savedPics}/>
      </View>
      )
  }
}

AppRegistry.registerComponent('myapp', () => myapp);