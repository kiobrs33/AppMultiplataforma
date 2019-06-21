import React from 'react';
import { View, Button, ScrollView, Image, Text } from 'react-native';
import Ionicos from 'react-native-ionicons';
// import { AsyncResource } from 'async_hooks';
import AsyncStorage from '@react-native-community/async-storage';
import { styles } from '../../styles/global';
import imgCampus from '../../assets/img/arequipa.jpg';
import IconBox from '../../components/ui/IconBox';

export default class HomeScreen extends React.Component {
	state = {
		userName: ''
	};
	static navigationOptions = {
		title: 'Bienvenido a la App!',
		tabBarIcon: ({ focused, horizontal, tintColor }) => {
			return <Ionicos name="ios-clipboard" size={25} color={tintColor} />;
		}
	};
	componentDidMount = async () => {
		const userName = await AsyncStorage.getItem('userName');
		this.setState({ userName: userName });
	};
	go2Chat = () => {
		this.props.navigation.navigate('Chat');
	};
	go2Profile = () => {
		this.props.navigation.navigate('Profile');
	};
	go2Lists = () => {
		this.props.navigation.navigate('Lists');
	};
	go2Settings = () => {
		this.props.navigation.navigate('Settings');
	};
	logoutHandler = async () => {
		await AsyncStorage.clear();
		this.props.navigation.navigate('Auth');
	};
	// _showMoreApp = () => {
	// 	this.props.navigation.navigate('Chat');
	// };
	// _signOutAsync = async () => {
	// 	await AsyncStorage.clear();
	// 	this.props.navigation.navigate('Auth');
	// };
	// render() {
	// 	return (
	// 		<View>
	// 			<Button title="Muestrame el chat" onPress={this._showMoreApp} />
	// 			<Button title="Mejor, cierra sesion :D" onPress={this._signOutAsync} />
	// 		</View>
	// 	);
	// }

	render() {
		return (
			<ScrollView>
				<Image source={imgCampus} />
				<Text style={styles.title}>Bienvenido {this.state.userName}</Text>
				<View style={styles.iconContainer}>
					<IconBox
						value={'Chat'}
						label={'Conversa Ya'}
						icon={require('../../assets/img/icon-profile.png')}
						onPress={this.go2Chat}
					/>
					<IconBox
						value={'Perfil'}
						label={'Mi usuario'}
						icon={require('../../assets/img/icon-profile.png')}
						onPress={this.go2Profile}
					/>
					<IconBox
						value={'Listados'}
						label={'Productos ,etc'}
						icon={require('../../assets/img/icon-list.png')}
						onPress={this.go2Lists}
					/>
				</View>
				<View style={styles.iconContainer}>
					<IconBox
						value={'Config'}
						label={'Mis utilidades'}
						icon={require('../../assets/img/icon-settings.png')}
					/>
					<IconBox
						value={'Salir'}
						label={'Cerrar Sesion'}
						icon={require('../../assets/img/icon-logout.png')}
						onPress={this.logoutHandler}
					/>
				</View>
			</ScrollView>
		);
	}
}
