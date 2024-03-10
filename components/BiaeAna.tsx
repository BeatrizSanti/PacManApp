


import React from 'react';
import {StyleSheet, View, ScrollView, Image } from 'react-native';

export default () => (


  <ScrollView contentContainerStyle={style.scrollViewContent}>

      <View>
        <Image 
          style={style.BiaImage} 
          source={require('../assets/Bia.png')} 
        />
      </View>


      <View>
        <Image 
          style={style.AnaImage} 
          source={require('../assets/ana.png')} 
        />
      </View>

  </ScrollView>

);

const style = StyleSheet.create({


  scrollViewContent: {
    flexGrow: 1,
  },

   BiaImage: {
    marginTop: 50,
    height: 110,
    width: 390,
    left: 30
   
  },
  AnaImage: {
    marginTop: 30,
    height: 195,
    width: 449,
    marginBottom: 50,
    right: 25
  },

  
});




