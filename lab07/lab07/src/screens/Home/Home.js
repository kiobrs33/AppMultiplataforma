import React from 'react';
import { View, Button } from 'react-native';
import Ionicos from 'react-native-ionicons';
// import { AsyncResource } from 'async_hooks';
import AsyncStorage from '@react-native-community/async-storage';

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Bienvenido a la App!',
		tabBarIcon: ({ focused, horizontal, tintColor }) => {
			return <Ionicos name="ios-clipboard" size={25} color={tintColor} />;
		}
	};
	_showMoreApp = () => {
		this.props.navigation.navigate('Chat');
	};
	_signOutAsync = async () => {
		await AsyncStorage.clear();
		this.props.navigation.navigate('Auth');
	};
	render() {
		return (
			<View>
				<Button title="Muestrame el chat" onPress={this._showMoreApp} />
				<Button title="Mejor, cierra sesion :D" onPress={this._signOutAsync} />
			</View>
		);
	}
}
