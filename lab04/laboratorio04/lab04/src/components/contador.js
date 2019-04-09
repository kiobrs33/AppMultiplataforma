import React,{Component} from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

// class Contador extends Component{
//     state = {
//         valor: this.props.valor
//     }
//     componentDidUpdate(oldProps,oldState){
//         if(oldProps.valor!==this.props.valor && !isNaN(this.props.valor)){
//             this.setState({
//                 valor: this.props.valor
//             });
//         }
//     }
//     disminuirHandler = () =>{
//         this.setState({
//             valor: this.state.valor - 1
//         })
//     }
//     aumentarHandler = () =>{
//         this.setState({
//             valor: this.state.valor + 1
//         })
//     }
//     render(){
//         return(<View>
//             <Text>Mi Contandor: {this.state.valor}</Text>
//             <Button
//                 title='Disminuir'
//                 onPress={this.disminuirHandler}
//             />
//             <Button
//                 title='Incrementar'
//                 color="#841584"
//                 onPress={this.aumentarHandler}
//             />
//         </View>)
//     }
// }

class Calculadora extends Component{
    state = {
        valor1 : this.props.valor1,
        valor2 : this.props.valor2,
        rpt : 0
    }
    componentDidUpdate(oldProps,oldState){
        if(oldProps.valor1!==this.state.valor1 && oldProps.valor2!==this.state.valor2 
            && !isNaN(this.props.valor1)){
            this.setState({
                valor1: this.props.valor1,
                valor2: this.props.valor2
            });
        }
    }
    suma = () =>{
        this.setState({
            rpt : this.state.valor1 + this.state.valor2
        });
    }
    resta = () =>{
        if(this.state.valor2 > this.state.valor1){
            this.setState({
                rpt : 1 * (this.state.valor2 - this.state.valor1)
            });
        }
        else{
            this.setState({
                rpt : this.state.valor1 - this.state.valor2
            });
        }
    }
    multi = () =>{
        this.setState({
            rpt : this.state.valor1 * this.state.valor2
        })
    }
    divi = () =>{
        this.setState({
            rpt : this.state.valor1 / this.state.valor2
        })
    }
    render(){
        return(<View>
            <Text>Calculadora Lozano</Text>
            <Text>Primer Nro : {this.state.valor1}</Text>
            <Text>Segundo Nro : {this.state.valor2}</Text>
            <Button
                title='+'
                onPress={this.suma}
            />
            <Button
                title='-'
                onPress={this.resta}
            />
            <Button
                title='*'
                onPress={this.multi}
            />
            <Button
                title='/'
                onPress={this.divi}
            />
            <Text>Respuesta : {this.state.rpt}</Text>
        </View>)
    }
}

//exportando mi componente contador
export default Calculadora;