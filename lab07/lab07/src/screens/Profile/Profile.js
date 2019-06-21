import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { styles } from '../../styles/global';
import getAvatar from '../../lib/avatar';
import IconBox from '../../components/ui/IconBox';
import Badge from '../../components/ui/badge';
import loadingGif from '../../assets/img/loading.gif';

class Profile extends React.Component {
	state = {
		avatar: '',
		userName: '',
		userEmail: ''
	};
	componentDidMount = async () => {
		const userName = await AsyncStorage.getItem('userName');
		const userEmail = await AsyncStorage.getItem('userEmail');
		this.setState({
			userName: userName,
			userEmail,
			avatar: getAvatar(userEmail)
		});
	};
	editProfileHandler = () => {
		this.props.navigation.navigate('ProfileEdit');
	};
	render() {
		return (
			<ScrollView>
				{this.state.avatar !== '' ? (
					<Badge
						userName={this.state.userName}
						email={this.state.userEmail}
						avatar={this.state.avatar}
					/>
				) : (
					<Image source={loadingGif} />
				)}
				<View style={styles.iconContainer}>
					<IconBox
						value={'editar'}
						label={'Modifcar perfil'}
						icon={require('../../assets/img/icon-edit.png')}
						onPress={this.editProfileHandler}
					/>
				</View>
			</ScrollView>
		);
	}
}
export default Profile;
