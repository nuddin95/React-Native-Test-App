import React, { Component } from 'react';
import { 
    AppRegistry, 
    Dimensions, 
    TouchableHighlight, 
    Text, 
    View, 
    Platform, 
    StyleSheet, 
    Button,
    ScrollView,
    Image} from 'react-native';
import styles from './Styles.js';
import Gallery from './GalleryComp.js';
import Camera from 'react-native-camera';
import { actions } from 'react-native-router-flux';
import * as firebase from 'firebase';


const firebaseConfig ={
  apiKey: "AIzaSyCa3bPLTfp84fXJ5zUBeI6fyvgyqfKfNYU",
  authDomain: "stackathon-17f9d.firebaseapp.com",
  databaseURL: "https://stackathon-17f9d.firebaseio.com",
  projectId: "stackathon-17f9d",
  storageBucket: ""
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default class CameraComp extends Component{
    constructor(props){
        super(props);
        this.state = {
            camera:false,
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
            <Text>CAMERA STATE: {this.state.camera+""}</Text>
            <Button
                onPress={()=> this.setState({camera:!(this.state.camera)})}
                title="Camera"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            {this.state.camera ? (
            <View style={styles.container}>
                <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}>
                    <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
                </Camera>
            </View>):false}
            {this.state.savedPics.length ? (
                <ScrollView>
                    <Text>GALLERY</Text>
                    <View style = {styles.allImages}>
                        {
                            this.state.savedPics.map((pic, ind) => 
                                (
                                    <View key={ind}>
                                        <Image
                                            onPress={actions.singleImage()}
                                            key={`pic #${ind}`}
                                            style={styles.SingleImage}
                                            source={{uri:pic.path}}
                                        />
                                    </View>
                                )
                            )
                        }
                    </View>
                </ScrollView>):false
            }
                
        </View>
      )
  }

  takePicture() {
    const options = {};
    this.camera.capture({metadata: options})
      .then((data) => {
          console.log(data)
          this.picturesRef.push(data)
        })
      .catch(err => console.error(err));
  }

  selectImage(){
    console.log(this.key)
    this.props.style = styles.SingleImagePressed;
    this.setState();
  }
}

AppRegistry.registerComponent('CameraComp', () => CameraComp);