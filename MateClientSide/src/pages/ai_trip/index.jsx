import React, { useState,useRef } from 'react';
import { ScrollView,View,StyleSheet, Text } from 'react-native';
import axios from 'axios';
import BackArrow from '../../components/BackArrow/backArrow';
import { TextInput, Button } from 'react-native-paper';
import ButtonLower from '../../components/ButtonLower/buttonLower'
import AccordionCountries from '../../components/AccordionCountries/accordionCountries';
import Theme from '../../../assets/styles/theme';
import { windowHeight,windowWidth,VerticalScale,HorizontalScale } from '../../utils';
import { List ,RadioButton } from 'react-native-paper';

const PlanTrip = () => {
    
  
    const handlePress = () => setExpanded(!expanded);



  return (
    <View style={styles.screen}>
    <BackArrow/>
    <Text style={[Theme.primaryTitle,styles.title]}>התייעצות עם Ai</Text>
    <View style={styles.inputsContainer}>
        <AccordionCountries/>
    </View>
    <ButtonLower textContent={"יצירת תכנון טיול עם Ai"} handlePress={handlePress}/>
   
  </View>
  )
}

export default PlanTrip

const styles = StyleSheet.create({
    screen:{
    flex:1,
    },
    title:{
    marginTop:windowHeight*0.175,
    marginBottom:windowHeight*0.0174
    },
    inputsContainer:{
        marginTop:VerticalScale(44)
    },
    })