import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Theme from '../../../assets/styles/theme'
const  Home = ({navigation}) => {
  return (
    <View style={[Theme.screen,styles.screen]}>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({

    screen:{
        alignItems:'center',
        justifyContent:'center'
    }
})