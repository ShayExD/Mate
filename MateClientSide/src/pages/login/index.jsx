import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Theme from '../../../assets/styles/theme'
import { windowHeight } from '../../utils'

export default function Login() {
  return (
    <View style={styles.screen}>
      <Text style={[Theme.primaryTitle,styles.title]}>התחברות</Text>
      <Text style={[Theme.primaryText,styles.text]}>אנא הרשם לאפליקציה על מנת להתחיל להכיר מטיילים</Text>
    </View>
  )
}

const styles = StyleSheet.create({
screen:{
    flex:1,
},
title:{
marginTop:windowHeight*0.175,
marginBottom:windowHeight*0.0174

},
text:{
color:'gray',
marginHorizontal:0
}
})