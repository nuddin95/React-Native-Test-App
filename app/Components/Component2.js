import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight} from 'react-native';


export default class Component2 extends Component{
  
  onPress(){
  	console.log("Hey");
  }

  render(){
    return (
      <TouchableHighlight 
      	style={style.main} 
      	onPress={this.onPress}
      	underlayColor='white'
      	>
	      <View>
	        	<Text 
	        		style={style.redText}
	        		>
	        		I'm bleeeedinnggggg!!!!
	        	</Text>
	      </View>
      </TouchableHighlight>
      )
  }
}

const style = StyleSheet.create({
	redText: {
		color: 'red'
	},
	main: {
		backgroundColor:'red'
	}
})

AppRegistry.registerComponent('Component2', () => Component2);