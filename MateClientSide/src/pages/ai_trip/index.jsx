import React, { useState,useRef,useEffect } from 'react';
import { ScrollView,View,StyleSheet, Text } from 'react-native';
import axios from 'axios';
import BackArrow from '../../components/BackArrow/backArrow';
import { TextInput, Button } from 'react-native-paper';
import ButtonLower from '../../components/ButtonLower/buttonLower'
import DropdownCountries from '../../components/DropdownCountries/dropdownCountries';
import Theme from '../../../assets/styles/theme';
import { windowHeight,windowWidth,VerticalScale,HorizontalScale } from '../../utils';
import { List ,RadioButton } from 'react-native-paper';
import * as googleGenerativeAI from "@google/generative-ai";

const PlanTrip = () => {

  const API_KEY = "AIzaSyBozb6vVgoZ6pYEjsfZ7W5jtsEZjRSgI2Y"

useEffect(()=>{
const StartChat = async () => { 
  const genAI = new googleGenerativeAI.GoogleGenerativeAI(API_KEY)
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const prompt = "Write travel for 3 days in budapest"
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}
StartChat()
},[])

  return (
    <View style={styles.screen}>
    <BackArrow/>
    <Text style={[Theme.primaryTitle,styles.title]}>התייעצות עם Ai</Text>
    <View style={styles.inputsContainer}>
    <DropdownCountries/>
    </View>
    <ButtonLower textContent={"יצירת תכנון טיול עם Ai"} handlePress={()=>{}}/>
   
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