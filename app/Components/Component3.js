import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, Switch } from 'react-native';

export default class Component3 extends Component{

  constructor(){
  	super();
  	this.state={
      mainSwitch:false,
  		value:"",
  		counter:0
  	}
    this.onChange = this.onChange.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

  onChange(value){
  	this.setState({
  		counter:this.state.counter+1,
  		value
  	})
  }

  onValueChange(value){
    this.setState({
      mainSwitch:value
    })
  }

  render(){
    return (
      <View>
      	<Text>Component3 Ready!</Text>
      	<TextInput 
      		placeholder="What is your wish?"
      		onChangeText={(value) => this.onChange(value)}
      	/>
      	<Text>You have made {this.state.counter} changes, current value is {this.state.value}</Text>
        <Switch 
          onValueChange={(value) => this.onValueChange(value)} 
          value={this.state.mainSwitch}
          tintColor="black"
          thumbTintColor="red"
          onTintColor="black"
          />
        {
          (this.state.mainSwitch) ? (<Text>YOU'VE TURNED ON THE SWITCH!</Text>) : false
        }
      </View>
      )
  }
}

AppRegistry.registerComponent('Component3', () => Component3);