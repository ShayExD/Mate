import { StyleSheet,Image, Text, View } from 'react-native'
import React from 'react'
import { IconButton } from 'react-native-paper';
import Theme from '../../../assets/styles/theme';
import { VerticalScale } from '../../utils';
// import { useNavigation } from '@react-navigation/native';


const BackArrow = () => {

    // const navigation = useNavigation();

    // const handlePress = () => {
    //     navigation.goBack();
    //   };

  return (
    <View style={styles.container}>
        <IconButton
      icon="arrow-left"
      background={'F7F7F9'}
      />   
     </View>
  )
}

export default BackArrow

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        top:VerticalScale(56),
        backgroundColor: '#F7F7F9',
        borderRadius:'50%'
    }
  
})