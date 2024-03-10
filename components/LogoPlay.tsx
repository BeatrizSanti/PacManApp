

import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export default () => (

  <TouchableOpacity
    style={style.container}
    onPress={() => {
      console.log('Imagem clicada');
    }}
  >
    <Image
      style={style.logo}
      source={require('../assets/logoPlay.png')}
    />
  </TouchableOpacity>
);

const style = StyleSheet.create({

  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',

  },

  logo: {
    height: 161,
    width: 318,
    borderRadius: 9,
    marginTop: 200,
    marginBottom: 50,
  },
});
