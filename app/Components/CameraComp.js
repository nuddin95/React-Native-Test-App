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
    Image} from 'react-native';
import styles from './Styles.js'
import Camera from 'react-native-camera';

export default class CameraComp extends Component{
    constructor(props){
        super(props);
        this.state = {
            camera:false,
            pics:[props.pics],
            currentImage:{}
        }
    }

    componentDidMount(){
        console.log(this.state.pics)
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
            {this.state.pics.length ? (
                <View>
                    <Text>GALLERY</Text>
                    <View style = {styles.allImages}>
                        {/* <Text>YOU'RE SUCH A GREAT PHOTOGRAPHER!!!</Text> */}
                        {
                            this.state.pics.map((pic, ind) => 
                                (
                                    <View key={ind}>
                                        <Image
                                            onClick={this.selectImage.bind(this)}
                                            key={`pic #${ind}`}
                                            style={styles.SingleImage}
                                            source={{uri:pic.path}}
                                        />
                                    </View>
                                )
                            )
                        }
                    </View>
                </View>):false
            }
                
        </View>
      )
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => {
          console.log(data)
          //this.setState({pics:[...this.state.pics, data]})
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