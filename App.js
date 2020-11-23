import React, { useState } from 'react'; //importando o react na aplicação
import {View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground} from 'react-native'; // importando algumas tags de dentro do react native

export default function App(){ // ciando nosso primeiro componente em forma de função
const [peso, setPeso] = useState(''); //utilizando os estados do usaState
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

  //JSX
  return( 
    <ImageBackground source={require('./src/background/back.jpg')} //colocar imagem
    style={styles.container}>
      <Text style={styles.title}> IMC </Text>

      <TextInput // div
        style={styles.input}
        value={peso}
        onChangeText={(peso) => setPeso(peso)} //cada vez que digitar ele vai armazenar em uma variavel {useState} estados
        placeholder="Peso (KG)"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        value={altura}
        onChangeText={(altura) => setAltura(altura)}
        placeholder="Altura (cm)"
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

//chamando o stylesheet para esilização de cada componente
const styles = StyleSheet.create({ 
  //ciando um grupo de estilização
  container:{
    //propiedades de estilos
    flex: 1, //pegar toda tela
          
  },
  title:{
    textAlign: 'center',
    marginTop: 120,
    fontSize: 30
  },
  input:{
    backgroundColor: '#121212',
    borderRadius: 10, //bordas3w2
    margin: 15, //margem de todos os lados
    padding: 10, //espaçamento interno
    color: '#FFF', //cor
    fontSize: 20 //tamanho da fonte
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
