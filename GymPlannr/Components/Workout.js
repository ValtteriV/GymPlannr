import React from 'react';
import {View, Text} from 'react-native';

class Workout extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			exercises:props.ex
		}
	}
	render() {
		return (
			<View style={{flex:1}}>
				{this.state.exercises.map((exercise) => <Exercise ex={exercise}/>)}
			</View>
		)
	}
}

Exercise = (props) => (
	<View style={{height:70, backgroundColor:'skyblue'}}>
		<View style={{height:20, backgroundColor:'powderblue'}}>
			<Text>{props.ex.name}</Text>
		</View>
		<View style={{height:25}}>
			<Text>{props.ex.reps} reps with {props.ex.weight} weights </Text>
		</View>
		<View style={{height:25}}>
			<Text>{props.ex.sets} sets with a {props.ex.breaktime} second break in-between</Text>
		</View>
	</View>
)

export default Workout

