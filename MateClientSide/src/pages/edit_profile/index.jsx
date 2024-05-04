import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState,useEffect,useContext } from 'react'
import Theme from '../../../assets/styles/theme'
import { VerticalScale, windowHeight } from '../../utils'
import BackArrow from '../../components/BackArrow/backArrow'
import { TextInput } from 'react-native-paper'
import ButtonLower from '../../components/ButtonLower/buttonLower'
import axios from 'axios'
import GenderPicker from '../../components/GenderPicker/genderPicker'
import AvatarComponent from '../../components/Avatar/AvatarComponent '
import MultiSelectDropdown from '../../components/MultiSelectDropdown/multiSelectDropdown';
import DatePickerComponent from '../../components/DatePicker/datePicker'
import { hobbies } from '../../utils'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { differenceInYears, parseISO } from 'date-fns';
import CitiesComponent from '../../components/CitiesComponents/citiesComponent'
import { AuthContext } from '../../../AuthContext'

export default function EditProfile() {
  const [profilePicture, setProfilePicture] = useState(null)
  const [fullName, setFullName] = useState('')
  const [description, setDescription] = useState('')
  const [age, setAge] = useState('')
  const [selectedDate, setSelectedDate] = useState(null);
  const [gender, setGender] = useState('')
  const [destination, setDestination] = useState('')
  const [instagram, setInstagram] = useState('')
  const [city, setCity] = useState('')
  const [selectedInterests, setSelectedInterests] = useState([])
  const [countryData, setCountryData] = useState([])
  const [phoneNumber, setPhoneNumber] = useState('');
  const { loginUser,loggedInUser ,setLoggedInUser} = useContext(AuthContext);
  const [updatedUser, setUpdatedUser] = useState(loggedInUser);

  useEffect(() => {
    const fetchData = async () => {
      const storedCountryData = await AsyncStorage.getItem('countryData');
      setCountryData(JSON.parse(storedCountryData));
    };
    fetchData();
  }, []);



  useEffect(() => {
    const ageCalculate = () => {
       const today = new Date();
       const birthDate = selectedDate;
       const calculatedAge = differenceInYears(today, birthDate);
       setAge(calculatedAge)
    };
    ageCalculate();
  }, [selectedDate]);



  const handleSelectedInterests = (selectedItems) => {
    setSelectedInterests(selectedItems);
    console.log(selectedInterests)
  };
  
  const handleSelectedDestinations = (selectedItems) => {
    setDestination(selectedItems);
    console.log(destination)

  };

  const handleSelectedCity = (selectedCity) => {
    setCity(selectedCity);
  };

  const mapToSingleChar = (label) => {
    switch (label) {
      case 'גבר':
        return 'ז';
      case 'אישה':
        return 'נ';
      case 'אחר':
        return 'א';
      default:
        return '';
    }
  }
  
  const updateUser = async () => {
    try {
      const updatedUserData = {
        id: loggedInUser.id, // Assuming you have the user's ID in loggedInUser.id
        fullname: fullName,
        password: loggedInUser.password, 
        introduction: description,
        gender: mapToSingleChar(gender),
        age: age,
        instagram: instagram,
        email: loggedInUser.email, 
        phoneNumber: phoneNumber,
        profileImage: profilePicture, // Assuming you have the user's profile image URL in loggedInUser.profileImage
        city: city,
        travelPlan: destination,
        tripInterests: selectedInterests,
      };
      console.log(updatedUserData)
  
      const response = await axios({
        method: 'PUT', // or 'PATCH' if the server expects a PATCH request
        url: 'https://proj.ruppin.ac.il/cgroup72/test2/tar1/api/User/UpdateUser',
        data: updatedUserData,
        headers: {
          'Content-Type': 'application/json',
        },      });
  
      console.log('User updated successfully:', response.data);
      // You can perform additional actions after successful update, such as updating the loggedInUser state
  
      // Example: Update the loggedInUser state with the updated user data
      loginUser(updatedUserData);
    } catch (error) {
      console.error('Error updating user:', error);
      // Handle the error if needed
    }
  };



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
      <AvatarComponent setProfilePicture={setProfilePicture} />

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
      />  
       <TextInput
        label= {"קצת עלי"}
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        mode="outlined"
        activeOutlineColor='#E6824A'
        selectionColor='gray'
      />
      <TextInput
        label= {"אינסטגרם"}
        value={instagram}
        onChangeText={setInstagram}
        style={[styles.input,{textAlign:'left'}]}
        mode="outlined"
        activeOutlineColor='#E6824A'
        selectionColor='gray'
      />
      <TextInput
      label="מספר פלאפון"
      value={phoneNumber}
      onChangeText={setPhoneNumber}
      style={[styles.input,{textAlign:'left'}]}
      mode="outlined"
      keyboardType="phone-pad" // Set keyboardType to phone-pad for phone number input
      activeOutlineColor="#E6824A"
      selectionColor="gray"
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
            title={'בחירת תחומי עניין בטיול'}
            onSelectionsChange={handleSelectedInterests}

          ></MultiSelectDropdown>
          <MultiSelectDropdown
            data={countryData}
            title={'בחירת יעדים'}
            onSelectionsChange={handleSelectedDestinations}

          ></MultiSelectDropdown>
          <CitiesComponent onSelectCity={handleSelectedCity} />

</View>
      
    <ButtonLower textContent={'עדכון פרטים'} handlePress={updateUser} />
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
    direction: 'rtl',
    textAlign:'right',
    fontFamily:Theme.primaryText.fontFamily,
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
