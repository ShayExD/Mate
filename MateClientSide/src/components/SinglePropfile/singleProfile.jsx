import React from 'react'
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import { HorizontalScale, VerticalScale } from '../../utils'
import Ionicons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Theme from '../../../assets/styles/theme'
const SingleProfile = ({ picUrl, title, destination, numOfPeople }) => {
  return (
    <Pressable>
      <View style={styles.shadowContainer}>
        <View style={styles.container}>
          <Image resizeMode={'cover'} source={picUrl} style={styles.image} />
          <View style={styles.information}>
            <Text style={styles.title}>כפיר קורן</Text>
            <Text style={styles.text}>
              הצגה עצמית ב3 שורותהצגה עצמית ב3 שורות הצגה עצמית ב3 שורותהצגה
              עצמית ב3 שורות הצגה עצמית ב3 שורותהצגה עצמית ב3 שורות
            </Text>
            <View style={styles.bottom}>
              <View style={styles.profileDetail}>
                <Text style={[styles.text]}>26</Text>
              </View>
              <View style={styles.profileDetail}>
                <Text style={[styles.text]}>תל אביב</Text>
              </View>
              <View style={styles.profileDetail}>
                <Text style={[styles.text]}>kfirkoren</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  shadowContainer: {
    borderRadius: HorizontalScale(20),
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  container: {
    marginTop: VerticalScale(20),
    marginHorizontal: HorizontalScale(5),
    marginBottom: VerticalScale(20),
    width: HorizontalScale(200),
    height: VerticalScale(200),
    borderRadius: HorizontalScale(20),
    backgroundColor: 'white',
    overflow: 'hidden',
    alignItems: 'center',
  },
  image: {
    width: '40%',
    height: '40%',
    borderRadius: '50%',
  },
  information: {
    width: '90%',
    height: '40%',
    alignItems: 'center',
    // backgroundColor: 'blue',
    marginTop: VerticalScale(10),
    // paddingHorizontal: HorizontalScale(10),
    // paddingVertical: VerticalScale(10),
  },
  title: {
    textAlign: 'right',
    color: 'black',
    fontFamily: 'OpenSans-Bold',
    fontSize: 8,
  },
  text: {
    textAlign: 'right',
    color: 'black',
    fontFamily: 'OpenSans',
    fontSize: 8,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', // Adjust as needed
    marginTop: VerticalScale(10),
    marginBottom: VerticalScale(0),
  },
  profileDetail: {
    minWidthwidth: '40%',
    flexDirection: 'row-reverse', // Reverse the order of elements to place the text on the right
    alignItems: 'center', // Align items vertically in the center
    backgroundColor: '#E3E3E3',
    height: VerticalScale(15),
    paddingHorizontal: HorizontalScale(5), // Add horizontal padding for spacing between items
    borderRadius: HorizontalScale(50),
    justifyContent: 'space-between',
    marginHorizontal: HorizontalScale(5),
  },
})

export default SingleProfile
