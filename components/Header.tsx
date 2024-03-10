

import React from 'react';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity } from 'react-native';



export default () => (
  
  <ScrollView>
    <View style={style.header}>

    
      <View style={style.imagemContainer}>
        <Image 
          style={style.imagemHeader}
          source={require('../assets/lofoheader.png')}
        />
      </View>

      <TouchableOpacity
        style={style.imagemContainer2}
        onPress={() => console.log('Cereja Pressed')}
      >
        <Image 
          style={style.imagemHeaderCereja}
          source={require('../assets/CEREJA.png')}
        />
      </TouchableOpacity>



      <TouchableOpacity
        style={style.imagemContainer2}
        onPress={() => console.log('Fantasma Vivo Pressed')}
      >
        <Image 
          style={style.imagemHeaderVivo}
          source={require('../assets/FANTASMA.png')}
        />
      </TouchableOpacity>



      <TouchableOpacity
        style={style.imagemContainer2}
        onPress={() => console.log('Fantasma Morto Pressed')}
      >
        <Image 
          style={style.imagemHeaderMorto}
          source={require('../assets/FANTAMASMORTO.png')}
        />
      </TouchableOpacity>


    </View>  
  </ScrollView>
);

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: 430,
    height: 67,
    backgroundColor: '#231F20',
  },

  imagemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },

  imagemContainer2: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
  },

  imagemHeader: {
    height: '60%',
    width: '130%',
    left: 25,
  },

  imagemHeaderCereja: {
    height: '60%',
    width: '50%',
    left: 37,
  },

  imagemHeaderVivo: {
    height: '60%',
    width: '50%',
    left: 5,
  },

  imagemHeaderMorto: {
    height: '60%',
    width: '50%',
    right: 25,
  },

  
});
