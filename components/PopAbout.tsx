

import React from 'react';
import {StyleSheet, View, ScrollView, Image } from 'react-native';

export default () => (


  <ScrollView contentContainerStyle={style.scrollViewContent}>

      <View style={style.imageContainer}>
        <Image 
          style={style.AboutImage} 
          source={require('../assets/about.png')} 
          />
      </View>

    <View style={style.popImageContainer1}>

      <View>
        <Image 
          style={style.PopExImage1} 
          source={require('../assets/popAbout.png')} 
        />
      </View>

      <View style={style.popImageContainer2}>
        <Image 
          style={style.PopExImage2} 
          source={require('../assets/popAbout2.png')} 
        />
      </View>

      <View style={style.pacContainer}>
        <Image 
          style={style.PacExImage} 
          source={require('../assets/pacmanexplica.png')} 
        />
      </View>




    </View>
    
  </ScrollView>

);

const style = StyleSheet.create({


  scrollViewContent: {
    flexGrow: 1,
  },

  pacContainer: {
    position: 'absolute',
    right: -50,
    top: 55,  

  },


  imageContainer: {
    marginLeft: 0, 
  },


  popImageContainer1: {
    marginLeft: 10, 
    marginRight: 20, 

  },


  popImageContainer2: {
    marginLeft: 20, 
    marginRight: 20, 

  },


  AboutImage: {
    marginTop: 70,
    height: 50,
    width: 250,
  },


  PopExImage1: {
    marginTop: 40,
    height: 205,
    width: 260,
  },


  PopExImage2: {
    marginTop: 10,
    height: 100,
    width: 290,
  },

  
  PacExImage: {
    height: 161,
    width: 172,
  },
});
