


import React from 'react';
import {StyleSheet, View, ScrollView, Image } from 'react-native';

export default () => (


  <ScrollView contentContainerStyle={style.scrollViewContent}>

      <View>
        <Image 
          style={style.UltPacImage} 
          source={require('../assets/ultimoPacman.png')} 
        />
      </View>

  </ScrollView>

);

const style = StyleSheet.create({


  scrollViewContent: {
    flexGrow: 1,
  },

  UltPacImage: {
    marginTop: 20,
    height: 246,
    width: 241,
    marginBottom: 10,
  },
  
});





