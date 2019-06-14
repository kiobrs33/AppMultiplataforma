import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
	TextInput
} from 'react-native';
import axios from 'axios';

const people = [
	{ name: 'Carlos', lastname: 'Amexquita' },
	{ name: 'Marta', lastname: 'Chavez' },
	{ name: 'Pedro', lastname: 'Picapiedra' },
	{ name: 'Lucia', lastname: 'Gonzalez' }
];
// type Props = {};

// export default class App extends Component<Props> {
// 	state = {
// 		contador: 1
// 	};
// 	componentDidMount() {
// 		setInterval(
// 			() => this.setState({ contador: this.state.contador + 1 }),
// 			1000
// 		);
// 	}
// 	render() {
// 		return (
// 			<View style={styles.container}>
// 				<Text style={styles.welcome}>Veamos nuestro Contador!</Text>
// 				<Text style={styles.instructions}>{this.state.contador}</Text>
// 			</View>
// 		);
// 	}
// }

// export default class App extends Component<Props> {
// 	state = {
// 		fecha: new Date()
// 	};
// 	componentDidMount() {
// 		setInterval(() => this.setState({ fecha: new Date() }), 1000);
// 	}
// 	render() {
// 		const fecha =
// 			this.state.fecha.getHours() +
// 			' : ' +
// 			this.state.fecha.getMinutes() +
// 			' : ' +
// 			this.state.fecha.getSeconds();
// 		return (
// 			<View style={styles.container}>
// 				<Text style={styles.welcome}>Veamos nuestro Reloj! Lozano Ramos</Text>
// 				<Text style={styles.instructions}>{fecha}</Text>
// 			</View>
// 		);
// 	}
// }

// export default class App extends Component<Props> {
// 	render() {
// 		return (
// 			<View style={styles.container}>
// 				<FlatList
// 					keyExtractor={(item, index) => index + ''}
// 					data={['A', 'B', 'C', 'D']}
// 					renderItem={({ item }) => <Text>{item}</Text>}
// 				/>
// 			</View>
// 		);
// 	}
// }

// export default class App extends Component<Props> {
// 	onPressHandler = item => {
// 		alert('El apellido es : ' + item.lastname);
// 	};
// 	render() {
// 		const people = [
// 			{ name: 'Carlos', lastname: 'Amexquita' },
// 			{ name: 'Marta', lastname: 'Chavez' },
// 			{ name: 'Pedro', lastname: 'Picapiedra' },
// 			{ name: 'Lucia', lastname: 'Gonzalez' }
// 		];
// 		return (
// 			<View style={styles.container}>
// 				<FlatList
// 					keyExtractor={(item, index) => index + ''}
// 					data={people}
// 					renderItem={({ item, index }) => {
// 						return (
// 							<TouchableOpacity onPress={() => this.onPressHandler(item)}>
// 								<Text
// 									style={index % 2 === 0 ? styles.ItemEven : styles.ItemUneven}
// 								>
// 									{item.name}
// 								</Text>
// 							</TouchableOpacity>
// 						);
// 					}}
// 				/>
// 			</View>
// 		);
// 	}
// }

// export default class App extends Component<Props> {
// 	state = {
// 		data: people,
// 		text: ''
// 	};
// 	onPressHandler = item => {
// 		alert('El apellido es : ' + item.lastname);
// 	};
// 	renderHeader = text => {
// 		return (
// 			<TextInput
// 				style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
// 				onChangeText={this.searchHandler}
// 				value={this.state.text}
// 			/>
// 		);
// 	};

// 	searchHandler = text => {
// 		this.setState(
// 			{
// 				text: text
// 			},
// 			() => {
// 				const newData = people.filter(item => {
// 					const itemData = `${item.name.toUpperCase()}`;
// 					const textData = text.toUpperCase();
// 					return itemData.indexOf(textData) > -1;
// 				});
// 				this.setState({
// 					data: newData
// 				});
// 			}
// 		);
// 	};
// 	render() {
// 		return (
// 			<View>
// 				<FlatList
// 					keyExtractor={(item, index) => index + ''}
// 					data={this.state.data}
// 					renderItem={({ item, index }) => {
// 						return (
// 							<TouchableOpacity onPress={() => this.onPressHandler(item)}>
// 								<Text
// 									style={index % 2 === 0 ? styles.ItemEven : styles.ItemUneven}
// 								>
// 									{item.name}
// 								</Text>
// 							</TouchableOpacity>
// 						);
// 					}}
// 					ListHeaderComponent={this.renderHeader}
// 				/>
// 			</View>
// 		);
// 	}
// }

export default class App extends Component {
	state = {
		loading: people,
		data: []
	};

	componentDidMount() {
		this.setState({ loading: true });
		axios({
			method: 'GET',
			url: 'https://yts.lt/api/v2/list_movies.json'
		})
			.then(reponse => {
				this.setState({
					loading: false,
					data: response.data.data.movies
				});
			})
			.catch(err => {
				this.setState({ loading: false });
				console.warn(err);
			});
	}
	onPressHandler = item => {
		alert(item.description_full);
	};

	renderHeader = text => {
		return (
			<TextInput
				style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
				onChangeText={this.searchHandler}
				value={this.state.text}
			/>
		);
	};
	render() {
		let contenido = <Text>Cargando, espere por favor...</Text>;
		if (!this.state.loading) {
			contenido = (
				<FlatList
					keyExtractor={(item, index) => index + ''}
					data={this.state.data}
					renderItem={({ item, index }) => {
						return (
							<TouchableOpacity onPress={() => this.onPressHandler(item)}>
								<Text
									style={index % 2 === 0 ? styles.ItemEven : styles.ItemUneven}
								>
									{item.title_long}
								</Text>
							</TouchableOpacity>
						);
					}}
					ListHeaderComponent={this.renderHeader}
				/>
			);
		}
		return <View>{contenido}</View>;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	},
	ItemEven: {
		color: '#2B4B6F'
	},
	ItemUneven: {
		backgroundColor: '#D46A6A',
		color: 'white'
	}
});
