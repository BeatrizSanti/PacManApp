

import React from 'react';
import { Text, StyleSheet, View, ScrollView, Image } from 'react-native';

export default () => (


  <ScrollView contentContainerStyle={style.scrollViewContent}>
  
    <View style={style.popContainer}>
      <Image 
        style={style.PopImage} 
        source={require('../assets/popCereja.png')} 
      />
      <View style={style.popContent}>
        <Text style={style.txtTitle}> Rápido </Text>
        <Text style={style.txtText}>
          Obtenha o máximo de cerejas possível em 3 minutos! Obtenha o máximo de cerejas possível em 3 minutos!
        </Text>
      </View>
    </View>


    <View style={style.popContainer}>
      <Image 
        style={style.PopImage} 
        source={require('../assets/popPacman.png')} 
      />
      <View style={style.popContent}>
        <Text style={style.txtTitle}> Clássico </Text>

        <Text style={style.txtText}>
          O modo de Pac Man que você conhece e ama! O modo de Pac Man que você conhece e ama!
        </Text>
      </View>
    </View>


    <View style={style.popContainer}>
      <Image 
        style={style.PopImage} 
        source={require('../assets/popFatasma.png')} 
      />
      <View style={style.popContent}>
        <Text style={style.txtTitle}> Royale </Text>
        
        <Text style={style.txtText}>
          Sobreviva mais tempo que 100 jogadores! Sobreviva mais tempo que 100 jogadores!
        </Text>
      </View>
    </View>

    
  </ScrollView>

);

const style = StyleSheet.create({


  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },


  popContainer: {
    position: 'relative',
    marginBottom: 20,
  },

  PopImage: {
    height: 130,
    width: 300,
  },


  popContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10, 
  },
  
  
  txtTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'Minecraft',
    marginBottom: 20,
    left: 10,
  },

  txtText: {
    color: '#ffffff',
    fontFamily: 'Minecraft',
    fontSize: 12,
    letterSpacing: 0,
    textAlign: 'justify',
    maxWidth: 150, 
    left: 45,
  },
});
