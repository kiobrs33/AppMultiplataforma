import {
	createDrawerNavigator,
	createStackNavigator,
	createAppContainer,
	createBottomTabNavigator
} from 'react-navigation';

// class HomeScreen extends React.Component {
// 	render() {
// 		return (
// 			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// 				<Text>Hola Mundo!</Text>
// 				<Button
// 					title="Go to details"
// 					onPress={() => this.props.navigation.navigate('Details')}
// 				/>
// 			</View>
// 		);
// 	}
// }

// class DetailsScreen extends React.Component {
// 	render() {
// 		return (
// 			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// 				<Text>Details Screen</Text>
// 				<Button
// 					title="Go to home"
// 					onPress={() => this.props.navigation.navigate('Home')}
// 				/>
// 			</View>
// 		);
// 	}
// }

import HomeScreen from './src/screens/Home';
import DetailsScreen from './src/screens/Details';
import ProfileScreen from './src/screens/Profile';

const AppNavigator = createBottomTabNavigator(
	{
		Home: {
			screen: HomeScreen,
			path: 'home/',
			navigationOptions: {
				title: 'ESTAS EN EL HOME lozano'
			}
		},
		Details: DetailsScreen,
		Profile: ProfileScreen
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			title: 'App Lozano',
			headerStyle: {
				backgroundColor: '#f4511e'
			},
			headerTintColor: '#f4511e',
			headerTitleStyle: {
				fontWeight: 'bold'
			}
		}
	}
);

export default createAppContainer(AppNavigator);
