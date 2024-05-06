import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-paper'
import { HorizontalScale, VerticalScale } from '../../utils'
import Theme from '../../../assets/styles/theme'

const Header = ({ nickName,picUri }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text]}>{nickName}</Text>
      <Avatar.Image
        size={40}
        source={{uri:picUri}}
        style={styles.image}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    minWidthwidth: '40%',
    flexDirection: 'row-reverse', // Reverse the order of elements to place the text on the right
    alignItems: 'center', // Align items vertically in the center
    backgroundColor: '#E3E3E3',
    height: VerticalScale(50),
    paddingHorizontal: HorizontalScale(5), // Add horizontal padding for spacing between items
    borderRadius: HorizontalScale(50),
    justifyContent: 'space-between',
  },
  text: {
    marginLeft: HorizontalScale(10),
    marginRight: HorizontalScale(10),
    color: 'black',
    fontFamily: 'OpenSans',
    fontSize: 16,
  },
  image: {
    marginLeft: '0px',
    paddingLeft: '0px',
  },
})

export default Header
