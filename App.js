import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground} from 'react-native';

export default function App(){
const [peso, setPeso] = useState('');
const [altura, setAltura] = useState('');


function enviar(){
  const alt = altura / 100;
  const imc = peso / (alt * alt);
  

  if(imc < 18.6){
    alert('Mofi ta mt magin, seu IMC é: ' + imc.toFixed(2))
  }else if(imc >= 18.6 && imc < 24.9){
    alert('Até que tu ta dentro da medida parabens ae, teu imc é: ' + imc.toFixed(2))
  }else if(imc >= 24.9 && imc < 34.9){
    alert('Vamo da uma diminuida nos Açai né? ta um poquin acima em, teu imc é: ' + imc.toFixed(2))   
  }
}

  return(
    <ImageBackground source={require('./src/background/back.jpg')}
    style={styles.container}>
      <Text style={styles.title}> IMC </Text>

      <TextInput
        style={styles.input}
        value={peso}
        onChangeText={(peso) => setPeso(peso)}
        placeholder="Peso (KG)"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        value={altura}
        onChangeText={(altura) => setAltura(altura)}
        placeholder="Altura (KG)"
        keyboardType="numeric"
      />

      <TouchableOpacity 
      style={styles.btn}
      onPress={enviar}
      >
        <Text style={styles.btnText}>Calcular</Text>
      </TouchableOpacity>


    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    
       
  },
  title:{
    textAlign: 'center',
    marginTop: 120,
    fontSize: 30
  },
  input:{
    backgroundColor: '#121212',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#FFF',
    fontSize: 20
  },
  btn:{
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10

  },
  btnText:{
    color: '#000',
    fontSize: 20

  }
});