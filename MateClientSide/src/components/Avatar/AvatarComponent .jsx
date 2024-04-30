import React, { useState } from 'react';
import { View, Image, Button,Text,StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { VerticalScale,HorizontalScale } from '../../utils';
import Theme from '../../../assets/styles/theme';
const AvatarComponent = () => {

  const defaultAvatarURI = 'https://i.imgur.com/LBIwlSy.png';

  const [avatar, setAvatar] = useState(defaultAvatarURI);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setAvatar(result.assets[0].uri);s
      console.log(result.assets[0].uri)
    }
  };

  return (
    <View style={{  alignItems: 'center', justifyContent: 'center' }}>
      {avatar && <Image source={{ uri: avatar }} style={{ width: (150), height: (150), borderRadius: 75 }} />}
      <Button title="שנה תמונת פרופיל" onPress={pickImage} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      width: 150,
      height: 150,
      borderRadius: 75,
      backgroundColor: '#ccc', // Background color for the circle
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

export default AvatarComponent;
