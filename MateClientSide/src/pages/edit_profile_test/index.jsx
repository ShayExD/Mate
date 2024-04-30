import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Theme from '../../../assets/styles/theme'
import { VerticalScale, windowHeight } from '../../utils'
import BackArrow from '../../components/BackArrow/backArrow'
import { TextInput, Button } from 'react-native-paper'
import Input from '../../components/Input/input'
import ButtonLower from '../../components/ButtonLower/buttonLower'
import { Avatar } from 'react-native-paper'
import axios from 'axios'
import AgePicker from '../../components/AgePicker/agePicker'
import CountryPicker from '../../components/CountryPicker/countryPicker'
import ProfilePicturePicker from '../../components/ProfilePicturePicker/profilePicturePicker'
import GenderPicker from '../../components/GenderPicker/genderPicker'
import DropdownHobbies from '../../components/DropdownHobbies/dropdownHobbies'

export default function EditProfileTest() {
  const [profilePicture, setProfilePicture] = useState(null)
  const [fullName, setFullName] = useState([])
  const [data, setData] = useState([])
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [interests, setInterests] = useState('')
  const [destination, setDestination] = useState('')
  const [instagram, setInstagram] = useState('')
  const [city, setCity] = useState('')
  const [selectedHobbies, setSelectedHobbies] = useState([])
  const handleImagePick = (image) => {
    setProfilePicture(image)
  }

  return (
    <ScrollView
      contentContainerStyle={[Theme.screen, styles.screen]}
      showsVerticalScrollIndicator={false}
    >
      <BackArrow />
      <Text style={[Theme.primaryTitle, styles.title]}>בניית הפרופיל שלך</Text>
      <View style={styles.avatarContainer}>
        <Avatar.Image
          size={150}
          source={require('../../../assets/images/avatar.jpg')}
        />
      </View>
      <Text style={[Theme.primaryText, styles.text]}>העלאת תמונת פרופיל</Text>
      {/* <ProfilePicturePicker onImagePick={handleImagePick} /> */}
      <View style={styles.inputsContainer}>
        <DropdownHobbies
          selectedItems={selectedHobbies}
          setSelectedItems={setSelectedHobbies}
        />
        <TextInput
          label={'שם מלא'}
          value={fullName}
          onChangeText={setFullName}
          style={styles.input}
          mode='outlined'
          activeOutlineColor='#E6824A'
          selectionColor='gray'
          textAlign='right'
        />
        <TextInput
          label={'הצגה עצמית'}
          value={data}
          onChangeText={setData}
          style={styles.input}
          mode='outlined'
          activeOutlineColor='#E6824A'
          selectionColor='gray'
          textAlign='right'
        />
        <AgePicker selectedAge={age} onAgeChange={setAge} />
        <GenderPicker></GenderPicker>
      </View>
      <ButtonLower textContent={'עדכון פרטים'} handlePress={() => {}} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
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
    minWidth: '85%',
  },
  button: {
    marginTop: 10,
  },
  avatarContainer: {
    alignItems: 'center',
    marginVertical: windowHeight * 0.05,
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
