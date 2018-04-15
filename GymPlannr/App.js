import React from 'react';
import { TouchableHighlight, AppRegistry, StyleSheet, Text, View, Image, Button } from 'react-native';
import Workout from './Components/Workout'

exer = [{
	name: 'killer',
	reps: 10,
	weight: 50,
	sets: 5,
	breaktime: 45,
	key:0
},
	{
		name: 'killer',
		reps: 10,
		weight: 50,
		sets: 5,
		breaktime: 45,
		key:1
	},
	{
		name: 'killer',
		reps: 10,
		weight: 50,
		sets: 5,
		breaktime: 45,
		key:2
	},
	{
		name: 'killer',
		reps: 10,
		weight: 50,
		sets: 5,
		breaktime: 45,
		key:3
	}
]

export default class App extends React.Component {
  render() {
  	let pic = {uri: 'https://i.imgur.com/G3Jq9xM.jpg'}
    return (
		/*<Image source={pic} style={{width:230,height:230}}/> */
		<View style={{flex:1}}>
			<View style={{height:25}} />
			< Workout ex={exer}/>
		</View>
	);
  }
}


class ClickableImage extends React.Component {
	constructor() {
		super()
		this.state={
			pic:{uri: 'https://i.imgur.com/G3Jq9xM.jpg'},
			pic2:{uri: 'https://i.imgur.com/uji9iUs.jpg'},
			temp:null,
			asd:'temp'
		}
	}
	meme = () => {
		this.setState(previousState => {
			return {pic: previousState.pic2, pic2: previousState.pic}
		})
	}
	render() {
		return (
			<TouchableHighlight onPress={this.meme}>
				<Image source={this.state.pic} style={{width:200, height:200}}/>
			</TouchableHighlight>
	)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


AppRegistry.registerComponent('GymPlannr', () => clickableImage)