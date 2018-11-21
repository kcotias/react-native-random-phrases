// import
import React from 'react';
import {Text, View,Button, TouchableOpacity, Stylesheet, AppRegistry, Image} from 'react-native';

//formatações
const Styles = {



  principal: {


    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  botao: {

    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },

  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'

  }

};
//funcoes
const gerarNovaFrase = () => {

  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio*5);


  //frase
  var frases = Array();
  frases[0] = 'aa';
  frases[1] = 'bb';
  frases[2] = 'cc';
  frases[3] = 'dd';
  frases[4] = 'ee';

  var fraseEscolhida = frases[numeroAleatorio];

  Alert.alert(fraseEscolhida);


}

//criar componente
const App = () => {


  const {principal, botao, textoBotao} = Styles;


  return (

      <View style= {principal}>
        <Image source={require('./imgs/logo.png')}/>
        <TouchableOpacity
          onPress = {gerarNovaFrase}
          style= {botao}>
          <Text style ={textoBotao}> Nova frase! </Text>
        </TouchableOpacity>
      </View>

  );
};

//renderizar para o dispositivo
AppRegistry.registerComponent('Frases', () => App );
