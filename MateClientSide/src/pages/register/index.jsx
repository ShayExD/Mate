import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useContext} from 'react'
import Theme from '../../../assets/styles/theme'
import { HorizontalScale, VerticalScale, windowHeight } from '../../utils'
import BackArrow from '../../components/BackArrow/backArrow'
import { TextInput, Button } from 'react-native-paper';
import Input from '../../components/Input/input'
import ButtonLower from '../../components/ButtonLower/buttonLower'
import axios from 'axios';
import { AuthContext } from '../../../AuthContext'


export default function Register({navigation}) {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser,loggedInUser } = useContext(AuthContext);


  const handleRegister = async () => {
    try {
      const response = await axios.post(
        `https://proj.ruppin.ac.il/cgroup72/test2/tar1/api/User/Register?email=${encodeURIComponent(email)}`,
        password.toString(),
         // Send password in the request body
        {
          headers: {
            'Content-Type': 'application/json', // Set the Content-Type header to application/json
          },
        }
      );
      
      console.log('User register in successfully:', response.data);
      loginUser(response.data)
      console.log(loggedInUser)
      navigation.navigate('EditProfile')

      // Handle further actions after successful login
    } catch (error) {
      console.error('Error logging in:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
      }
    }
  };
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
    <View style={[Theme.screen,styles.screen]}>
      <BackArrow/>
      <Text style={[Theme.primaryTitle,styles.title]}>הרשמה</Text>
      <Text  style={[Theme.primaryText,styles.text]}>מלא את השדות הבאים על מנת להירשם</Text>
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
      <ButtonLower textContent={"הירשם"} handlePress={handleRegister}/>
      <Text style={Theme.primaryText}> כבר יש לך חשבון? <Text style={Theme.primaryColor} onPress={()=>navigation.navigate('Login')}>כניסה לחשבון</Text></Text>
     
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