import React, { useState, useRef, useEffect } from 'react'
import { ScrollView, View, StyleSheet, Text } from 'react-native'
import axios from 'axios'
import BackArrow from '../../components/BackArrow/backArrow'
import { TextInput, Button } from 'react-native-paper'
import ButtonLower from '../../components/ButtonLower/buttonLower'
import DropdownCountries from '../../components/DropdownCountries/dropdownCountries'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import Theme from '../../../assets/styles/theme'
import {
  windowHeight,
  windowWidth,
  VerticalScale,
  HorizontalScale,
} from '../../utils'
import { Picker } from '@react-native-picker/picker';

import { List, RadioButton } from 'react-native-paper'
import * as googleGenerativeAI from '@google/generative-ai'
import DropdownComponent from '../../components/dropdownTest/dropdowntTest'
import DaysPicker from '../../components/NumberPicker/numberPicker'
import NumberPicker from '../../components/NumberPicker/numberPicker'

const Test = () => {
  const [daysNumber, setDaysNumber] = useState('')
  const [cityLabel, setCityLabel] = useState('')
  const [countryLabel, setCountryLabel] = useState('')
  const myObject = {
    text: "Hello, world!"
  };
      const StartChat = async (country,city,numberOfDay) => {
      setdaysNumber(numberOfDay);
      setCityLabel(city);
      setcountryLabel(country);
      const API_KEY = 'AIzaSyBozb6vVgoZ6pYEjsfZ7W5jtsEZjRSgI2Y'
      const genAI = new googleGenerativeAI.GoogleGenerativeAI(API_KEY)
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
      const prompt = 'Write travel for 3 days in budapest'
      const result = await model.generateContent(prompt)
      const response = await result.response
      const text = response.text()
      console.log(text)
    }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.screen}>
        <BackArrow />
        <Text style={[Theme.primaryTitle, styles.title]}>התייעצות עם Ai</Text>
        <View style={styles.inputsContainer}>
        <DropdownComponent setCountryLabel={setCountryLabel} setCityLabel={setCityLabel}> </DropdownComponent>
        <NumberPicker selectedValueState={daysNumber} onValueChange={setDaysNumber} ></NumberPicker>
        </View>
        <ButtonLower
          textContent={'יצירת תכנון טיול עם Ai'}
          handlePress={() => {StartChat()}}
        />
      </View>
      </TouchableWithoutFeedback>
  )
}

export default Test

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems:'center'
  },
  title: {
    marginTop: windowHeight * 0.175,
    marginBottom: windowHeight * 0.0174,
  },
  inputsContainer: {
    marginTop: VerticalScale(44),
  },
  input:{
    width:"95%"
  }
})
