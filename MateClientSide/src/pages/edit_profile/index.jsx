import { StyleSheet, Text, View, ScrollView,Pressable } from 'react-native'
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
import { interests } from '../../utils'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { differenceInYears, parseISO } from 'date-fns';
import CitiesComponent from '../../components/CitiesComponents/citiesComponent'
import { AuthContext } from '../../../AuthContext'
import AgePicker from '../../components/AgePicker/agePicker'
import { Alert } from 'react-native';
import { mapToSingleChar,SingleCharToString } from '../../utils'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function EditProfile({navigation}) {
  const { loginUser,loggedInUser ,setLoggedInUser,logoutUser} = useContext(AuthContext);

  const [profilePicture, setProfilePicture] = useState(loggedInUser.profileImage)
  const [fullName, setFullName] = useState(loggedInUser.fullname)
  const [description, setDescription] = useState(loggedInUser.introduction)
  const [age, setAge] = useState(loggedInUser.age)
  const [selectedDate, setSelectedDate] = useState(null);
  const [gender, setGender] = useState(SingleCharToString(loggedInUser.gender))
  const [destination, setDestination] = useState([])
  const [instagram, setInstagram] = useState(loggedInUser.instagram)
  const [city, setCity] = useState(loggedInUser.city)
  const [selectedInterests, setSelectedInterests] = useState([])
  const [countryData, setCountryData] = useState([])
  const [phoneNumber, setPhoneNumber] = useState(loggedInUser.phoneNumber);
  const [updatedUser, setUpdatedUser] = useState(loggedInUser);
  const [phoneNumberError, setPhoneNumberError] = useState('')
  const phoneNumberPattern = /^\d{10}$/
  const validatePhoneNumber = () => {
    if (!phoneNumberPattern.test(phoneNumber)) {
      setPhoneNumberError(
        'Invalid phone number format. Please enter 10 digits.',
      )
    } else {
      setPhoneNumberError('')
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const storedCountryData = await AsyncStorage.getItem('countryData');
      setCountryData(JSON.parse(storedCountryData));
    };
    fetchData();
  }, []);

  const logOut = () => {
    logoutUser()
    navigation.navigate('Login')
    console.log('logOut')
  }

  
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

  const uploadImage = async (uri) => {
    try {
      const formData = new FormData();
      formData.append('files', {
        uri,
        name: 'AvatarImage' + loggedInUser.id + '.jpg',
        type: 'image/jpeg',
      });

      const response = await axios.post(
        'https://proj.ruppin.ac.il/cgroup72/test2/tar1/api/Upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('Upload successful:', response.data);
      if (Array.isArray(response.data) && response.data.length > 0) {
        const uploadedFileName = response.data[0];
        const uploadedImageURI = `https://proj.ruppin.ac.il/cgroup72/test2/tar1/images/${uploadedFileName}`;
        await setProfilePicture(uploadedImageURI);
        console.log("check")
      }
    } catch (error) {
      console.error('Upload error:', error);
    }
    finally{
      console.log(loggedInUser)
    }
  };

  
  const updateUser = async () => {
    try {
    
      
      if (!phoneNumberPattern.test(phoneNumber)) {
        setPhoneNumberError(
          'Invalid phone number format. Please enter 10 digits.',
        )
        return;
      } 
      else {
        setPhoneNumberError('')
      }

      const updatedUserData = {
        id: loggedInUser.id, 
        fullname: fullName,
        password: loggedInUser.password, 
        introduction: description,
        gender: mapToSingleChar(gender),
        age: age,
        instagram: instagram,
        email: loggedInUser.email, 
        phoneNumber: phoneNumber,
        profileImage: profilePicture, 
        city: city,
        travelPlan: destination,
        tripInterests: selectedInterests,
      };

      
      if (fullName==''||description=='' ||gender==' '||instagram==''||phoneNumber==''||profilePicture== ''||city=='' || destination.length==0 || selectedInterests.length==0) {
        // Alert user to fill all fields
        Alert.alert(
          'Updated failed',
          'You have to fill all the fields, please update your details!',
          [
            {
              text: 'OK',
            },
          ]
        );
        return;
      }
      // await uploadImage(profilePicture)

      

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
        if(response.data){
          loginUser(updatedUserData);
          Alert.alert(
            'Updated Successful',
            'You have successfully updated your details!',
            [
              {
                text: 'OK',
                onPress: () => {
                  navigation.navigate('myTabs',{screen:'Home'});
                },
              },
            ]
          );
        }
      // Example: Update the loggedInUser state with the updated user data
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
      {/* <BackArrow /> */}
      <Pressable style={styles.icon} onPress={logOut}>
        <AntDesign name='logout' size={30} color='#e6824a' />
        <Text>התנתק</Text>
      </Pressable>
      <Text style={[Theme.primaryTitle, styles.title]}>בניית הפרופיל שלך</Text>
      <View style={styles.avatarContainer}>
      <AvatarComponent uploadImage={uploadImage} setProfilePicture={setProfilePicture} />

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
      keyboardType="phone-pad"
      activeOutlineColor="#E6824A"
      selectionColor="gray"
      />

        {phoneNumberError !== '' && (
          <Text style={styles.errorText}>{phoneNumberError}</Text>
        )}

      
       {/* <DatePickerComponent
					selectedDate={selectedDate}
					onDateChange={setSelectedDate}
				/> */}
        <AgePicker selectedAge={age}
        onAgeChange={setAge}/>
        
        <GenderPicker
        onGenderChange={setGender}
        selectedGender={gender}></GenderPicker>
        <MultiSelectDropdown
            data={interests}
            title={'בחירת תחומי עניין בטיול'}
            onSelectionsChange={handleSelectedInterests}

          ></MultiSelectDropdown>
          <MultiSelectDropdown
            data={countryData}
            title={'בחירת יעדים'}
            onSelectionsChange={handleSelectedDestinations}
            selectedItems={loggedInUser.travelPlan}

          ></MultiSelectDropdown>
          <CitiesComponent onSelectCity={handleSelectedCity} defualtOptionCheck={loggedInUser.city}/>

</View>
      
    <ButtonLower textContent={'עדכון פרטים'} handlePress={updateUser}  />
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
  icon: {
    position: 'absolute',
    left: '8%',
    top: VerticalScale(70),
    // backgroundColor: 'red',
    borderRadius: '50%',
    textAlign: 'center',
    alignItems: 'center',
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
  errorText:{
    marginTop: -VerticalScale(24),
    paddingVertical:VerticalScale(5),
    color:'red'
  }
})
