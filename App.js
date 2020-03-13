import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
    const [peso, setPeso] = useState('');
    const[altura, setAltura] = useState('');


    function handleSubmit(){
        const alt = altura/100;
        const imc = peso/(alt*alt);
        
        if(imc < 18.6){
            alert('Você está abaixo do peso! '+ imc.toFixed(2));
        }else if(imc >= 18.6 && imc <24.9){
            alert('Você está com o peso ideal! '+ imc.toFixed(2));
        }else if(imc >= 25 && imc < 29.9){
            alert('Acima do peso. IMC: ' + imc.toFixed(2));
        }else if(imc >= 30 && imc < 35){
            alert('Obesidade grau 1. IMC: ' + imc.toFixed(2));
        }else if(imc >= 35 && imc < 40){
            alert('Obesidade grau 2. IMC: ' + imc.toFixed(2));
        }else{
            alert('Obesidade grau 3. IMC: ' + imc.toFixed(2));
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calcule seu IMC</Text>
            
            <TextInput
            style={styles.input}
            value={peso}
            onChangeText={ (peso) => setPeso(peso) } 
            placeholder="Peso (Kg)"
            keyboardType="numeric"
            />

            <TextInput
            style={styles.input}
            value={altura}
            onChangeText={ (altura) => setAltura(altura) } 
            placeholder="Altura (cm)"
            keyboardType="numeric"
            />

            <TouchableOpacity 
            style={styles.button}
            onPress={handleSubmit}>
                <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>

        </View>
    );
}
 
const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    title:{
        textAlign: 'center',
        marginTop: 30,
        fontSize: 30
    },

    input:{
        backgroundColor: '#121212',
        borderRadius: 10,
        margin: 15,
        padding: 10,
        color: '#FFF',
        fontSize: 23
    },

    button:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        backgroundColor: '#41AeF4',
        padding: 10       
    },

    buttonText:{
        color: '#FFF',
        fontSize: 25,
    }

});