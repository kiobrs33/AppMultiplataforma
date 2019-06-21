import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

//Agregando la dependencia socketIO
import SocketIOClient from 'socket.io-client';

global.socket = SocketIOClient('http://172.23.12.171:5000');

AppRegistry.registerComponent(appName, () => App);
