import React from 'react';
import { View, Text, Button } from 'react-native';

class DetailsScreen extends React.Component {
	goProfileHandler = () => {
		this.props.navigation.navigate('Profile', {
			userName: 'Tecsupiano Lozano'
		});
	};
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Details Screen</Text>
				<Button
					title="Go to home"
					onPress={() => this.props.navigation.navigate('Home')}
				/>
				<Button title="Ver mi perfil" onPress={this.goProfileHandler} />
			</View>
		);
	}
}
export default DetailsScreen;
