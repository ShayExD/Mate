import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Theme from '../../../assets/styles/theme'
import { VerticalScale, windowHeight } from '../../utils'
import BackArrow from '../../components/BackArrow/backArrow'
import { TextInput, Button } from 'react-native-paper'
import Input from '../../components/Input/input'
import ButtonLower from '../../components/ButtonLower/buttonLower'
import { Avatar } from 'react-native-paper'
import TextView from '../../components/TextView/textView'
export default function ViewProfile() {

  return (
    <ScrollView
      contentContainerStyle={styles.screen}
      showsVerticalScrollIndicator={false}
    >
      <BackArrow />
      <Text style={[Theme.primaryTitle, styles.title]}>הפרופיל שלי</Text>
      <View style={styles.avatarContainer}>
        <Avatar.Image
          size={150}
          source={require('../../../assets/images/avatar.jpg')}
        />
        <Text style={[Theme.primaryText, styles.text]}>
          מלא את השדות הבאים על מנת להירשם
        </Text>
      </View>
      <View style={styles.inputsContainer}>
       <TextView
	   title={'שם מלא'}
	   content={'בר לוי אטיאס'}>
	   </TextView>
       <TextView
	   title={'גיל'}
	   content={'27'}>
	   </TextView>
       <TextView
	   title={'קצת עלי'}
	   content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus nibh sit amet lacus malesuada fringilla. Etiam vitae ipsum in velit laoreet euismod. Ut ac consectetur neque. Suspendisse auctor nunc sed augue dapibus, nec ultricies ligula commodo. Sed et sapien placerat nulla venenatis faucibus. Nam nec sem ut diam efficitur egestas.  '}>
	   </TextView>
	   <TextView
	   title={'תחביבים'}
	   content={'תכנות '}>
	   </TextView>
	   <TextView
	   title={'אנסטגרם'}
	   content={'barlevi.atias '}>
	   </TextView>
      </View>
      <ButtonLower textContent={'עריכת פרופיל'} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flexGrow: '1',
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
  },
  title: {
    marginTop: windowHeight * 0.1,
    marginBottom: windowHeight * 0.0174,
  },
  smallTitle: {
	color: Theme.primaryColor.color
  },
  inputsContainer: {
    // marginTop: VerticalScale(44),
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    direction: 'rtl',
  },
  labelContainer: {
    minWidth: '90%',
	maxWidth: '90%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'flex-start', // Center the content horizontally
    borderWidth: 1,
    borderColor: 'gray',
	marginBottom: 10
  },
  text: {
	paddingVertical: 10,
    color: 'gray',
    marginHorizontal: 0,
  },
  button: {
    marginTop: 10,
  },
  avatarContainer: {
    alignItems: 'center',
    marginVertical: windowHeight * 0.05,
  },
})
