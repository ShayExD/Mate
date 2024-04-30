import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState,useEffect } from 'react'
import Theme from '../../../assets/styles/theme'
import { VerticalScale, windowHeight } from '../../utils'
import BackArrow from '../../components/BackArrow/backArrow'
import { TextInput } from 'react-native-paper'
import ButtonLower from '../../components/ButtonLower/buttonLower'
import axios from 'axios'
import AgePicker from '../../components/AgePicker/agePicker'
import GenderPicker from '../../components/GenderPicker/genderPicker'
import AvatarComponent from '../../components/Avatar/AvatarComponent '
import MultiSelectDropdown from '../../components/MultiSelectDropdown/multiSelectDropdown';
import DatePickerComponent from '../../components/DatePicker/datePicker'
import { hobbies } from '../../utils'

export default function EditProfileTest() {
  const [profilePicture, setProfilePicture] = useState(null)
  const [fullName, setFullName] = useState('')
  const [description, setDescription] = useState('')
  const [age, setAge] = useState('')
  const [selectedDate, setSelectedDate] = useState(null);
  const [gender, setGender] = useState('')
  const [interests, setInterests] = useState('')
  const [destination, setDestination] = useState('')
  const [instagram, setInstagram] = useState('')
  const [city, setCity] = useState('')
  const [selectedHobbies, setSelectedHobbies] = useState([])
  const [countryData, setCountryData] = useState([])

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
            value: response.data[i].name,
            label: response.data[i].name,
          })
        }
        setCountryData(countryArray)
        console.log(countryData)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])


  return (
    <ScrollView
      contentContainerStyle={[styles.screen]}
      showsVerticalScrollIndicator={false}
    >
      <BackArrow />
      <Text style={[Theme.primaryTitle, styles.title]}>בניית הפרופיל שלך</Text>
      <View style={styles.avatarContainer}>
        {/* <Avatar.Image
          size={150}
          source={require('../../../assets/images/avatar.jpg')}
        /> */}
        <AvatarComponent></AvatarComponent>
      </View>
      <View style={styles.inputsContainer}>
      <TextInput
        label= {"שם מלא"}
        value={fullName}
        onChangeText={setFullName}
        style={styles.input}
        mode="outlined"
        activeOutlineColor='#E6824A'
        selectionColor='gray'
        textAlign='right'
      />  
       <TextInput
        label= {"קצת עלי"}
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        mode="outlined"
        secureTextEntry
        activeOutlineColor='#E6824A'
        selectionColor='gray'
        textAlign='right'

      />
       <DatePickerComponent
					selectedDate={selectedDate}
					onDateChange={setSelectedDate}
				/>
        <GenderPicker
        onGenderChange={setGender}
        selectedGender={gender}></GenderPicker>
        <MultiSelectDropdown
            data={hobbies}
            title={'בחירת תחביבים'}
          ></MultiSelectDropdown>
          <MultiSelectDropdown
            data={countryData}
            title={'בחירת יעדים'}
          ></MultiSelectDropdown>
      </View>
      




      <ButtonLower textContent={'עדכון פרטים'} handlePress={() => {}} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flexGrow:'1',
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
  },
  title: {
    marginTop: windowHeight * 0.175,
    marginBottom: windowHeight * 0.0174,
  },
  inputsContainer: {
    marginTop: VerticalScale(44),
  },
  text: {
    color: 'gray',
    marginHorizontal: 0,
  },
  input: {
    marginBottom: VerticalScale(24),
    paddingHorizontal: 10,
    textAlign: 'left', 
    direction: 'rtl',
  },
  button: {
    marginTop: 10,
  },
  avatarContainer: {
    alignItems: 'center',
    // marginVertical: windowHeight * 0.05,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: VerticalScale(24),
  },
  picker: {
    height: 50,
    width: '100%',
  },
})
