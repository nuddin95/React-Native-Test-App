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
import firebaseDB from '../../App.js'

export default class GalleryComp extends Component{
    constructor(props){
        super(props);
        this.state = {
            pics:[firebaseDB.mainState.savedPics]
        }
    }

    componentDidMount(){
        
    }

  render(){
    return (
        <View>
            <Text>{this.state.pics.length}</Text>
            <Text>GALLERY</Text>
            <View style = {styles.allImages}>
                {
                    this.state.pics.map((pic, ind) => 
                        (
                            <View key={ind}>
                                {console.log("SINGLE PICTURE", pic)}
                                <Image
                                    onClick={this.selectImage.bind(this)}
                                    style={styles.SingleImage}
                                    source={{uri:pic.path}}
                                />
                            </View>
                        )
                    )
                }
            </View>
        </View>)
    }

  selectImage(){
    console.log(this.key)
    this.props.style = styles.SingleImagePressed;
    this.setState();
  }
}

AppRegistry.registerComponent('GalleryComp', () => GalleryComp);