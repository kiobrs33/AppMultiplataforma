/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, 
              Text, 
              View, 
              TextInput} from 'react-native';
//importando mi componente contador desde la carpeta SRC
// import Contador from './src/components/contador';
import Calculadora from './src/components/contador'

export default class App extends Component<Props> {
  // state = {
  //   valorInicial: '0'
  // }
  // iniciarContadorHandler = (texto) =>{
  //   this.setState({
  //     valorInicial: texto
  //   })
  // }
  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.welcome}>Nuestro componente!</Text>
  //       <TextInput
  //         value={this.state.valorInicial}
  //         onChangeText={this.iniciarContadorHandler}
  //       />
  //       {!isNaN(this.state.valorInicial)?(<View>
  //         <Contador valor={parseInt(this.state.valorInicial)} />
  //         <Contador valor={parseInt(this.state.valorInicial)+1} />
  //         <Contador valor={parseInt(this.state.valorInicial)+2} />
  //       </View>):(<Text>Debe ingresar una valor numerico!</Text>)}
  //     </View>
  //   );
  // }
  state = {
    iniciarNum1 : '0',
    iniciarNum2 : '0'
  }
  iniciarNumero1 = (num1) =>{
    this.setState({
      iniciarNum1: num1
    });
  }
  iniciarNumero2 = (num2) =>{
    this.setState({
      iniciarNum2: num2
    });
  }
  render(){
    return(
      <View style={styles.container}>
        <TextInput
          value={this.state.iniciarNum1}
          onChangeText={this.iniciarNumero1}  
        />
        <TextInput
          value={this.state.iniciarNum2}
          onChangeText={this.iniciarNumero2}
        />
        {!isNaN(this.state.iniciarNum1)?(<View>
          <Calculadora
            valor1= {parseInt(this.state.iniciarNum1)}
            valor2= {parseInt(this.state.iniciarNum2)}
          />
        </View>):(<Text>Debe ingresar solo numeros papu!</Text>)}
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
