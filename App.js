

import React, { useState } from 'react';
import { Text, StyleSheet, View, Platform, StatusBar, SafeAreaView, ScrollView, Animated} from 'react-native';

import { useFonts } from 'expo-font';


import Header from './components/Header'
import Footer from './components/Footer'
import LogoPlay from './components/LogoPlay'
import Pop from  './components/Pop'
import PopAbout from  './components/PopAbout'
import BiaeAna from './components/BiaeAna'
import PacMan from './components/PacMan'
import GameOver from './components/GameOver'


export default function App() {


  const [loaded] = useFonts({
    Minecraft: require('./assets/Minecraft.ttf'),
  });


  const [scrollY] = useState(new Animated.Value(0));



  if (!loaded) {
    return null; 
  }

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });


  return (

    <ScrollView style={style.scrollView}>
      <View style={style.viewSafeAndroid}>

        <SafeAreaView style={style.layout}>
          <StatusBar backgroundColor= '#231F20'/>

          <Animated.View style={[style.header, { opacity: headerOpacity }]}>
            <Header/>
          </Animated.View>


          <Header/>
            <ScrollView
              style={style.scrollView}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: false }
              )}
              scrollEventThrottle={16}
            />

            
          <View style={style.content}>

            <LogoPlay/>

            <Pop/>

            <PopAbout/>

            <BiaeAna/>

            <PacMan/>

            <GameOver/>


          </View>

          <Footer/>


        </SafeAreaView>
        
      </View>  
    </ScrollView>
  );
}



const style = StyleSheet.create({

  scrollView: {
    flex: 1,
  },

  
 layout: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: '#FFDF00',
    alignItems: 'center'
},


  viewSafeAndroid:{
    flex:1,
    paddingTop: Platform.OS === "android" ? 
StatusBar.currentHeight:0,
    justifyContent: 'center', 

  },


  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },



  content: {
    flex: 1, 
    alignItems: 'center', 
    marginTop: 0,

  },
  
});
