import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import Theme from '../../../assets/styles/theme'
import { HorizontalScale, VerticalScale, windowHeight } from '../../utils'
import BackArrow from '../../components/BackArrow/backArrow'
import { TextInput, Button } from 'react-native-paper';
import Input from '../../components/Input/input'
import ButtonLower from '../../components/ButtonLower/buttonLower'
import axios from 'axios';

export default function Register() {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

const handleLogin = () => {
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
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
    <View style={styles.screen}>
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
      <ButtonLower textContent={"התחבר"} handlePress={handleLogin}/>
      <Text style={Theme.primaryText}> כבר יש לך חשבון? <Text style={Theme.primaryColor} onPress={()=>console.log("מעבר עמוד")}>כניסה לחשבון</Text></Text>
     
    </View>
  )
}

const styles = StyleSheet.create({
screen:{
flex:1,
width:'100%',
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