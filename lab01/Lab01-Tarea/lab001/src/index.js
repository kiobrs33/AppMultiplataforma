import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

function callMe(name){
    console.log(name);
}

const callMe2 = function(name){
    console.log(name);
}

const callMe3 = (name) => {
    console.log(name);
}

const callMe4 = () => {
    console.log("San Rene!");
}

const callMe5 = name => {
    console.log(name);
}

const returnMe = name => name
const returnMe2 = name => {
    return name;
}

callMe("Rene Lozano Ramos primra funcion");
callMe2("Rene probando segunda funcion");
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
