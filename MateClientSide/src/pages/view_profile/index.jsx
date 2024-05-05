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
import TagsView from '../../components/TagsView/tagsView'
import { useRoute } from '@react-navigation/native';

export default function ViewProfile() {
  const route = useRoute();
const { profile } = route.params; 

console.log(profile)
  const user = {
    age: 28,
    city: 'New York',
    email: 'john.doe@example.com',
    fullname: 'John Doe',
    gender: 'Male',
    id: 1001,
    instagram: 'johndoe_travels',
    introduction:
      'Passionate traveler exploring the world and seeking new adventures.',
    password: 'Tr@v3l3r!',
    phoneNumber: '+1-555-123-4567',
    profileImage: 'https://example.com/profile-images/johndoe.jpg',
    travelPlan: [
      'Tokyo, Japan - 2023/07/01 to 2023/07/10',
      'Barcelona, Spain - 2023/09/15 to 2023/09/25',
    ],
    tripInterests: [
      'Food and cuisine',
      'Historical landmarks',
      'Nature and hiking',
      'Art and culture',
    ],
  }
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
          {user.fullname.split(' ')[0]},{user.age}
        </Text>
      </View>
      <View style={styles.inputsContainer}>
        <TextView title={'שם מלא'} content={user.fullname}></TextView>
        <TextView title={'גיל'} content={user.age}></TextView>
        <TextView
          title={'מין'}
          content={user.gender}
          iconName={user.gender === 'Male' ? 'man' : 'women'}
        ></TextView>
        <TextView
          title={'קצת עלי'}
          content={
            user.introduction}
        ></TextView>
        <TagsView title={'תחביבים'} list={user.tripInterests}></TagsView>
        <TagsView title={'יעדים לטיול'} list={user.travelPlan}></TagsView>
        <TextView
          iconName={'logo-instagram'}
          title={'אנסטגרם'}
          content={user.instagram}
          allowCopy={true}
        ></TextView>
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
    color: Theme.primaryColor.color,
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
    marginBottom: 10,
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
