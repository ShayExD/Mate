import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import AntDesign from '@expo/vector-icons/AntDesign'
import axios from 'axios'
import { TextInput } from 'react-native-paper'
import ButtonLower from '../../components/ButtonLower/buttonLower'
import * as googleGenerativeAI from '@google/generative-ai'
import { Dialog, Portal, Text } from 'react-native-paper';
import Theme from '../../../assets/styles/theme'

const hobbies = [
  { label: 'טכנולוגיה', value: 'טכנולוגיה' },
  { label: 'ספורט', value: 'ספורט' },
  { label: 'קריאה', value: 'קריאה' },
  { label: 'מוזיקה', value: 'מוזיקה' },
  { label: 'טיולים', value: 'טיולים' },
  { label: 'בישול', value: 'בישול' },
  { label: 'ציור', value: 'ציור' },
  { label: 'תיקון רכבים', value: 'תיקון רכבים' },
  { label: 'גינון', value: 'גינון' },
  { label: 'סרטים', value: 'סרטים' },
  { label: 'אומנות', value: 'אומנות' },
  { label: 'סדנאות', value: 'סדנאות' },
  { label: 'פיתוח תוכנה', value: 'פיתוח תוכנה' },
  { label: 'מדע', value: 'מדע' },
  { label: 'צילום', value: 'צילום' },
]

const DropdownComponent = ({setCityLabel,setCountryLabel,setDaysNumber,days}) => {
  const [visible, setVisible] = useState(false);
  const [countryData, setCountryData] = useState([])
  const [cityData, setCityData] = useState([])
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [answer, setAnswer] = useState('')
  const [hobbys, sethobbys] = useState(0)
  const [value, setValue] = useState(null)
  const [isFocus, setIsFocus] = useState(false)
  const [isFocusCity, setIsFocusCity] = useState(false)

  const API_KEY = 'AIzaSyBozb6vVgoZ6pYEjsfZ7W5jtsEZjRSgI2Y'

  const renderLabel = (text,focus) => {
    if (value || focus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'black' }]}>
         {text}
        </Text>
      )
    }
    return null
  }


  useEffect(() => {
    var config = {
      method: 'get',
      url: 'https://api.countrystatecity.in/v1/countries',
      headers: {
        'X-CSCAPI-KEY':
          'RHRXUkhPTXl1aUlKTEk5WlFua1lwR01xVDE2b3U3R2NCUndPM01hTg==',
      },
    }

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data))
        var count = Object.keys(response.data).length
        let countryArray = []
        for (var i = 0; i < count; i++) {
          countryArray.push({
            value: response.data[i].iso2,
            label: response.data[i].name,
          })
        }
        setCountryData(countryArray)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  // const buildTrip = () => {
  //   const StartChat = async () => {
  //     const genAI = new googleGenerativeAI.GoogleGenerativeAI(API_KEY)
  //     const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
  //     const prompt = `Write travel for ${daysNumber} days in ${countryLabel} in ${cityLabel}`
  //     // const prompt = 'Write travel for 3 days in budapest'
  //     const result = await model.generateContent(prompt)
  //     const response = await result.response
  //     const text = response.text()
  //     console.log(text)
  //     setAnswer(text)
  //   }
  //   StartChat()
  // }

  const handleCity = (countyCode) => {
    var config = {
      method: 'get',
      url: `https://api.countrystatecity.in/v1/countries/${countyCode}/cities`,
      headers: {
        'X-CSCAPI-KEY':
          'RHRXUkhPTXl1aUlKTEk5WlFua1lwR01xVDE2b3U3R2NCUndPM01hTg==',
      },
    }
    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data))
        var count = Object.keys(response.data).length
        let cityArray = []
        for (var i = 0; i < count; i++) {
          cityArray.push({
            value: response.data[i].id,
            label: response.data[i].name,
          })
        }
        setCityData(cityArray)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: Theme.primaryColor.color }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={countryData}
        search
        maxHeight={300}
        labelField='label'
        valueField='value'
        placeholder={!isFocus ? 'בחירת מדינה' : '...'}
        searchPlaceholder='Search...'
        value={country}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          // setValue(item.value)
          setCountry(item.value)
          setCountryLabel(item.label)
          setIsFocus(false)
          handleCity(item.value)
        }}
      />
      <Dropdown
        style={[styles.dropdown, isFocusCity && { borderColor: Theme.primaryColor.color }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={cityData}
        search
        maxHeight={300}
        labelField='label'
        valueField='value'
        placeholder={!isFocusCity ? 'בחירת עיר' : '...'}
        searchPlaceholder='חיפוש...'
        value={city}
        onFocus={() => setIsFocusCity(true)}
        onBlur={() => setIsFocusCity(false)}
        onChange={(item) => {
          setCity(item.value)
          setCityLabel(item.label)
          setIsFocusCity(false)
        }}
      />
      {/* <TextInput
        label={'הכנס מספר ימים'}
        value={days}
        onChangeText={setDaysNumber}
        style={styles.input}
        mode='outlined'
        activeOutlineColor='#E6824A'
        selectionColor='gray'
        textAlign='right'
        theme={{
          colors: {
            primary: '#E6824A',
            background: 'white',
          },
          roundness: 7,
          borderWidth: 0.3,
        }}
        keyboardType='number-pad'
      /> */}
      {/* <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={hobbies}
        search
        maxHeight={300}
        labelField='label'
        valueField='value'
        placeholder={!isFocus ? 'תחומי עניין בטיול' : '...'}
        searchPlaceholder='Search...'
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value)
          setIsFocus(false)
          sethobbys(item.value)
        }}
      /> */}
    </View>
  )
}

export default DropdownComponent

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    minWidth:'95%',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    right: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    writingDirection:'rtl'
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  input: {
    fontSize: 16,
    height: 50,
    width: 340,
    marginBottom: 15,
    textAlign: 'right',
  },
  // answerContainer: {
  //   borderWidth: 1,
  //   borderColor: 'lightgrey',
  //   borderRadius: 8,
  //   marginBottom: 15,
  //   maxHeight: 200, // Keep this to limit the visible area
  // },
  // answerText: {
  //   fontSize: 16,
  //   padding: 10,
  // },
  // answerContent: {
  //   flexGrow: 1,
  // },
  scrollViewStyle: {
    flex: 1,
    backgroundColor: 'lightgrey',
    maxHeight: 200,
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
  },
})
