import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Badge = props => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={{ uri: props.avatar }} />
			<Text style={styles.name}>{props.userName}</Text>
			<Text style={styles.handle}>{props.email}</Text>
		</View>
	);
};
var styles = StyleSheet.create({
	container: {
		backgroundColor: '#48BBEC',
		paddingBottom: 10
	},
	name: {
		alignSelf: 'center',
		fontSize: 21,
		marginTop: 10,
		marginBottom: 5,
		color: 'white'
	},
	handle: {
		alignSelf: 'center',
		fontSize: 16,
		color: 'white'
	},
	image: {
		height: 125,
		width: 125,
		borderRadius: 65,
		marginTop: 10,
		alignSelf: 'center'
	}
});
export default Badge;

// import React, { Component } from 'react';
// import { ScrollView, Text, StyleSheet } from 'react-native';
// import { Input, Button } from 'react-native-elements';
// import AsyncStorage from '@react-native-community/async-storage';

// import { style, styles } from '../../styles/global';

// class ProfileEdit extends Component {
// 	state = {
// 		userId: null,
// 		userName: '',
// 		userEmail: '',
// 		picture: ''
// 	};
// 	static navigationOptions = {
// 		drawelLabel: () => null
// 	};
// 	componentDidMount = async () => {
// 		const userName = await AsyncStorage.getItem('userName');
// 		const userEmail = await AsyncStorage.getItem('userEmail');
// 		this.setState({
// 			userName: userName,
// 			userEmail: userEmail
// 		});
// 	};
// 	inputHandler = (text, field) => {
// 		this.setState({ [field]: text });
// 	};
// 	render() {
// 		return (
// 			<ScrollView style={formStyles.container}>
// 				<Text style={styles.subtitle}>Editar Perfil</Text>
// 				<Input
// 					placeholder="Nombre del usuario"
// 					leftIcon={{ type: 'font-awesone', name: 'user' }}
// 					inputContainerStyle={formStyles.Input}
// 					value={this.state.userName}
// 					onChangeText={text => this.inputHandler(text, 'userName')}
// 				/>
// 				<Input
// 					placeholder="Correo electronico"
// 					leftIcon={{ type: 'font-awesone', name: 'envelope' }}
// 					inputContainerStyle={formStyles.Input}
// 					value={this.state.userEmail}
// 					onChangeText={text => this.inputHandler(text, 'userEmail')}
// 				/>
// 			</ScrollView>
// 		);
// 	}
// }

// const formStyles = StyleSheet.create({
// 	container: {
// 		padding: 10
// 	},
// 	input: {
// 		marginTop: 10
// 	},
// 	button: {
// 		marginTop: 10
// 	}
// });
// export default ProfileEdit;
