


import React from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';

export default () => (

  <ScrollView style={style.scrollView} contentContainerStyle={style.scrollViewContent}>

    <View style={style.footer}>
      <Image 
        style={style.logoFooter}
        source={require('../assets/lofoheader.png')}
      />
    </View>  

  </ScrollView>
);

const style = StyleSheet.create({

  scrollView: {
    flex: 1,
  },


  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },


  footer: {
    backgroundColor: '#231f20',
    height: '100%',
    width: 450,
  },


  logoFooter: {
    width: 158,
    height: 54,
  },


});


