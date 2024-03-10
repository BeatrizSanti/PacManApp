


import React from 'react';
import {StyleSheet, View, ScrollView, Image } from 'react-native';

export default () => (


  <ScrollView contentContainerStyle={style.scrollViewContent}>

      <View>
        <Image
          style={style.GameOverImage}
          source={require('../assets/gameover.png')}
        />
      </View>

    

  </ScrollView>

);

const style = StyleSheet.create({


  scrollViewContent: {
    flexGrow: 1,
  },

  GameOverImage: {
    marginTop: 5,
    height: 320,
    width: 320,
    marginBottom: 550,
  },
  
});





