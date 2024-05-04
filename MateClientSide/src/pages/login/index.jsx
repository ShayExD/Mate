import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useContext} from 'react'
import Theme from '../../../assets/styles/theme'
import { VerticalScale, windowHeight,HorizontalScale } from '../../utils'
import BackArrow from '../../components/BackArrow/backArrow'
import { TextInput, Button } from 'react-native-paper';
import Input from '../../components/Input/input'
import ButtonLower from '../../components/ButtonLower/buttonLower'
import axios from 'axios';
import { AuthContext } from '../../../AuthContext'
import { Alert } from 'react-native';

export default function Login({navigation}) {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser,loggedInUser } = useContext(AuthContext);


  // const getAllUser = async () => {
  //   try {
  //     const response = await axios.get(`https://proj.ruppin.ac.il/cgroup72/test2/tar1/api/User`);
  
  //     setData(response.data);
  //     console.log('Data fetched successfully:', response.data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `https://proj.ruppin.ac.il/cgroup72/test2/tar1/api/User/Login?email=${encodeURIComponent(email)}`,
        password.toString(),
         // Send password in the request body
        {
          headers: {
            'Content-Type': 'application/json', // Set the Content-Type header to application/json
          },
        }
      );
      loginUser(response.data)
      console.log(loggedInUser)
      console.log('User logged in successfully:', response.data);
      // Handle further actions after successful login
    } catch (error) {
      // console.error('Error logging in:', error);
      if (error.response) {
        // console.error('Response data:', error.response.data);
        Alert.alert(
          'Incorrect Details',
          'Please enter the correct email and password.',
          [{ text: 'OK' }],
          { cancelable: false }
        );
        setEmail('')
        setPassword('')
      }
    }
  };
  
  // Example usage:
  // Replace 'user@email.com' and 'password123' with actual user input

  return (
    <View style={[Theme.screen,styles.screen]}>
      <BackArrow/>
      <Text style={[Theme.primaryTitle,styles.title]}>התחברות</Text>
      <Text  style={[Theme.primaryText,styles.text]}>אנא הרשם לאפליקציה על מנת להתחיל להכיר מטיילים</Text>
      <View style={styles.inputsContainer}>
      <TextInput
        label= {"אימייל"}
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
        activeOutlineColor='#E6824A'
        selectionColor='gray'
        textAlign='right'
      />  
       <TextInput
        label= {"סיסמה"}
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        mode="outlined"
        secureTextEntry
        activeOutlineColor='#E6824A'
        selectionColor='gray'
        textAlign='right'

      />
      </View>
      <Text style={Theme.primaryText}> עדיין אין לך חשבון? <Text style={Theme.primaryColor} onPress={()=>navigation.navigate('Register')}>להרשמה</Text></Text>
     
    <ButtonLower textContent={"התחבר"} handlePress={handleLogin}/>
    </View>
  )
}

const styles = StyleSheet.create({
screen:{
alignItems:'center',
},
title:{
marginTop:windowHeight*0.175,
marginBottom:windowHeight*0.0174

},
inputsContainer:{
marginTop:VerticalScale(44),
width:'90%',

},
text:{
color:'gray',
marginHorizontal:0,
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
})