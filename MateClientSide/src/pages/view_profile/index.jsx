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
import DatePickerComponent from '../../components/DatePicker/datePicker'
import CountryPicker from '../../components/CountryPicker/countryPicker'
import ProfilePicturePicker from '../../components/ProfilePicturePicker/profilePicturePicker'
import TextView from '../../components/TextView/textView'
export default function ViewProfile() {
  const [data, setData] = useState([])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [age, setAge] = useState('')
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedCountries, setSelectedCountries] = useState([])
  const [profilePicture, setProfilePicture] = useState(null)

  const handleImagePick = (image) => {
    setProfilePicture(image)
  }

  const handleLogin = () => {
    console.log('Email:', email)
    console.log('Password:', password)
  }
  // const handleLogin = async () => {
  //   try {
  //     const response = await axios.get(`https://localhost:7271/api/User`);
  //     setData(response.data);
  //     console.log('Data fetched successfully:', response.data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  return (
    <ScrollView
      contentContainerStyle={styles.screen}
      showsVerticalScrollIndicator={false}
    >
      <BackArrow />
      <Text style={[Theme.primaryTitle, styles.title]}>הפרופיל שלי</Text>
      <View style={styles.avatarContainer}>
        <Avatar.Image
          size={150}
          source={require('../../../assets/images/avatar.jpg')}
        />
        <Text style={[Theme.primaryText, styles.text]}>
          מלא את השדות הבאים על מנת להירשם
        </Text>
      </View>
      <View style={styles.inputsContainer}>
       <TextView
	   title={'שם מלא'}
	   content={'בר לוי אטיאס'}>
	   </TextView>
       <TextView
	   title={'גיל'}
	   content={'27'}>
	   </TextView>
       <TextView
	   title={'קצת עלי'}
	   content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus nibh sit amet lacus malesuada fringilla. Etiam vitae ipsum in velit laoreet euismod. Ut ac consectetur neque. Suspendisse auctor nunc sed augue dapibus, nec ultricies ligula commodo. Sed et sapien placerat nulla venenatis faucibus. Nam nec sem ut diam efficitur egestas.  '}>
	   </TextView>
	   <TextView
	   title={'תחביבים'}
	   content={'תכנות '}>
	   </TextView>
      </View>
      <ButtonLower textContent={'עריכת פרופיל'} handlePress={handleLogin} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flexGrow: '1',
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
  },
  title: {
    marginTop: windowHeight * 0.175,
    marginBottom: windowHeight * 0.0174,
  },
  smallTitle: {
	color: Theme.primaryColor.color
  },
  inputsContainer: {
    // marginTop: VerticalScale(44),
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    direction: 'rtl',
  },
  labelContainer: {
    minWidth: '90%',
	maxWidth: '90%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'flex-start', // Center the content horizontally
    borderWidth: 1,
    borderColor: 'gray',
	marginBottom: 10
  },
  text: {
    color: 'gray',
    marginHorizontal: 0,
  },
  textAttributes: {
	textAlign: 'left',
	direction: 'rtl',
    color: 'black',
    fontSize: 18,
    // marginBottom: 10,
    // marginRight: 120,
  },

  button: {
    marginTop: 10,
  },
  avatarContainer: {
    alignItems: 'center',
    marginVertical: windowHeight * 0.05,
  },
})
