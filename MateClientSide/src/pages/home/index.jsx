import {
  Pressable,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
} from 'react-native'
import React, { useState, useContext,useEffect } from 'react'
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
import Spinner from 'react-native-loading-spinner-overlay';

export default function Home({ navigation }) {

  const { loginUser,loggedInUser ,setLoggedInUser} = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const trips = [
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
  const users = [
    {
      name: 'כפיר קורן',
      details:
        'הצגה עצמית ב3 שורותהצגה עצמית ב3 שורות הצגה עצמית ב3 שורותהצגה עצמית ב3 שורות הצגה עצמית ב3 שורותה צגה עצמית ב3 שורות',
      profileImg: require('../../../assets/images/TripPhoto.jpg'),
      age: 25,
      city: 'חיפה',
      ig: 'kfirkoren',
    },
    {
      name: 'כפיר קורן',
      details:
        'הצגה עצמית ב3 שורותהצגה עצמית ב3 שורות הצגה עצמית ב3 שורותהצגה עצמית ב3 שורות הצגה עצמית ב3 שורותהצגה עצמית ב3 שורות',
      profileImg: require('../../../assets/images/TripPhoto.jpg'),
      age: 25,
      city: 'חיפה',
      ig: 'kfirkoren',
    },
    {
      name: 'כפיר קורן',
      details:
        'הצגה עצמית ב3 שורותהצגה עצמית ב3 שורות הצגה עצמית ב3 שורותהצגה עצמית ב3 שורות הצגה עצמית ב3 שורותהצגה עצמית ב3 שורות',
      profileImg: require('../../../assets/images/TripPhoto.jpg'),
      age: 25,
      city: 'חיפה',
      ig: 'kfirkoren',
    },
    {
      name: 'כפיר קורן',
      details:
        'הצגה עצמית ב3 שורותהצגה עצמית ב3 שורות הצגה עצמית ב3 שורותהצגה עצמית ב3 שורות הצגה עצמית ב3 שורותהvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvצגה עצמית ב3 שורות',
      profileImg: require('../../../assets/images/TripPhoto.jpg'),
      age: 25,
      city: 'חיפה',
      ig: 'kfirkoren',
    },
  ]

  const getAllUser = async () => {
    try {
      const response = await axios.get(`https://proj.ruppin.ac.il/cgroup72/test2/tar1/api/User`);
      const updatedUserData = response.data.filter(user => user.id !== loggedInUser.id);
      setData(updatedUserData);
      
      // console.log('Data fetched successfully:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllUser();
  }, []); 

  return (
    <SafeAreaView style={[Theme.screen, styles.screen]}>
        <Spinner
        visible={isLoading}
        textContent={'Loading...'}
        textStyle={styles.spinnerText}
        overlayColor="rgba(0, 0, 0, 0.6)"
      />
      <View style={styles.topBar}>
        <Header nickName={loggedInUser.fullname}></Header>
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
          data={trips}
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
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => (
            <SingleProfile
              handlePress={()=>{    navigation.navigate('ViewProfile', { profile: item });}}
              name={item.fullname}
              details={item.introduction}
              profileImg={ require('../../../assets/images/TripPhoto.jpg')}
              age={item.age}
              city={item.city}
              ig={item.instagram}
            ></SingleProfile>
          )}
        />
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
  spinnerText: {
    color: '#FFF',
  },
  content: {
    marginTop: VerticalScale(30),
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
