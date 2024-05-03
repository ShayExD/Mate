import {
  Pressable,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
} from 'react-native'
import React, { useState, useContext } from 'react'
import Theme from '../../../assets/styles/theme'
import { VerticalScale, windowHeight, HorizontalScale } from '../../utils'
import BackArrow from '../../components/BackArrow/backArrow'
import { TextInput, Button } from 'react-native-paper'
import Input from '../../components/Input/input'
import ButtonLower from '../../components/ButtonLower/buttonLower'
import axios from 'axios'
import { AuthContext } from '../../../AuthContext'
import { Alert } from 'react-native'
import Header from '../../components/Header/header'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Trip from '../../components/SingleTrip/singleTrip'
import SingleTrip from '../../components/SingleTrip/singleTrip'
import SingleProfile from '../../components/SinglePropfile/singleProfile'

export default function Home({ navigation }) {
  const items = [
    {
      picUrl: require('../../../assets/images/TripPhoto.jpg'),
      title: 'Bromo Mountain',
      destination: 'Indonesia',
      numOfPeople: 48,
    },
    {
      picUrl: require('../../../assets/images/TripPhoto.jpg'),
      title: 'Bromo Mountain',
      destination: 'Indonesia',
      numOfPeople: 48,
    },
    {
      picUrl: require('../../../assets/images/TripPhoto.jpg'),
      title: 'Bromo Mountain',
      destination: 'Indonesia',
      numOfPeople: 48,
    },
    {
      picUrl: require('../../../assets/images/TripPhoto.jpg'),
      title: 'Bromo Mountain',
      destination: 'Indonesia',
      numOfPeople: 48,
    },
  ]

  return (
    <SafeAreaView style={[Theme.screen, styles.screen]}>
      <View style={styles.topBar}>
        <Header></Header>
        <View style={styles.bell}>
          <Icon
            name='bell-badge-outline'
            size={30}
            color='#e6824a'
            style={styles.icon}
          />
        </View>
      </View>
      <View style={styles.content}>
        <Text style={[Theme.primaryTitle, styles.title]}>
          טיולים מומלצים עבורך
        </Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={items}
          renderItem={({ item }) => (
            <SingleTrip
              picUrl={item.picUrl}
              title={item.title}
              destination={item.destination}
              numOfPeople={item.numOfPeople}
            ></SingleTrip>
          )}
        />
      </View>
      <View style={styles.content}>
        <Text style={[Theme.primaryTitle, styles.title]}>
          פרופילים מומלצים עבורך
        </Text>
        <SingleProfile
          title={'kfir'}
          picUrl={require('../../../assets/images/TripPhoto.jpg')}
          destination={'lala'}
          numOfPeople={80}
        ></SingleProfile>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: { alignItems: 'center' },
  topBar: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginTop: VerticalScale(20),
  },
  content: {
    marginTop: VerticalScale(63),
    width: '90%',
    // flexDirection: 'row-reverse',
  },
  title: { textAlign: 'right' },
  bell: {
    backgroundColor: '#E3E3E3',
    borderRadius: '50%',
    height: VerticalScale(50),
    width: HorizontalScale(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
})
