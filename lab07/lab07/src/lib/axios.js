import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://172.23.12.171:5000'
});

export default instance;
