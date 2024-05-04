import React from 'react'
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import { HorizontalScale, VerticalScale } from '../../utils'
import Ionicons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Theme from '../../../assets/styles/theme'
const SingleProfile = ({ name, details, profileImg, age, city, ig }) => {
  return (
    <Pressable>
      <View style={styles.shadowContainer}>
        <View style={styles.container}>
          <Image
            resizeMode={'cover'}
            source={profileImg}
            style={styles.image}
          />
          <View style={styles.information}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.text}>{details} </Text>
          </View>
          <View style={styles.bottom}>
            <View style={styles.profileDetail}>
              <Text style={[styles.profileText]}>{age}</Text>
            </View>
            <View style={styles.profileDetail}>
              <Text style={[styles.profileText]}>{city}</Text>
            </View>
            <View style={styles.profileDetail}>
              <Text style={[styles.profileText]}>{ig}</Text>
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
    width: HorizontalScale(220),
    height: VerticalScale(220),
    borderRadius: HorizontalScale(20),
    backgroundColor: 'white',
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: '#e6824a',
  },
  image: {
    width: '40%',
    height: '40%',
    borderRadius: 50,
    marginTop: VerticalScale(5),
  },
  information: {
    width: '90%',
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: VerticalScale(10),
    paddingHorizontal: HorizontalScale(10),
    paddingVertical: VerticalScale(10),
  },
  title: {
    textAlign: 'right',
    color: 'white',
    fontFamily: 'OpenSans-Bold',
    fontSize: 12,
    maxWidth: '90%',
    maxHeight:'30%'
  },
  text: {
    marginTop: VerticalScale(10),
    textAlign: 'center',
    color: 'white',
    fontFamily: 'OpenSans',
    fontSize: 8,
  },
  profileText: {
    color: 'black',
    fontFamily: 'OpenSans',
    fontSize: 8,
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '15%',
    marginTop: VerticalScale(5),
    marginBottom: VerticalScale(0),
  },
  profileDetail: {
    minWidth: '25%',
    maxWidth: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E3E3E3',
    height: VerticalScale(15),
    paddingHorizontal: HorizontalScale(5),
    borderRadius: HorizontalScale(50),
    marginHorizontal: HorizontalScale(5),
  },
})

export default SingleProfile
