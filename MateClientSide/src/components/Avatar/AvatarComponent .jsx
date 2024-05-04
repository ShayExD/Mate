import React, { useState,useContext } from 'react';
import { View, Image, Button,Text,StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { VerticalScale,HorizontalScale } from '../../utils';
import Theme from '../../../assets/styles/theme';
import axios from 'axios';
import { AuthContext } from '../../../AuthContext';

const AvatarComponent = ({setProfilePicture}) => {
  const { loggedInUser } = useContext(AuthContext);

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
      setAvatar(result.assets[0].uri);
      console.log(result.assets[0].uri)
      console.log(result.assets[0])

      uploadImage(result.assets[0].uri);
    }
  };

  const uploadImage = async (uri) => {
    try {
      const formData = new FormData();
      formData.append('files', {
        uri,
        name: 'AvatarImage'+loggedInUser.id+'.jpg', 
        type: 'image/jpeg', 
      });

      const response = await axios.post(
        'https://proj.ruppin.ac.il/cgroup72/test2/tar1/api/Upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('Upload successful:', response.data);
      if (Array.isArray(response.data) && response.data.length > 0) {
        const uploadedFileName = response.data[0];
        console.log(uploadedFileName)
        const uploadedImageURI = `https://proj.ruppin.ac.il/cgroup72/test2/tar1/uploadedFiles/${uploadedFileName}`;
        console.log(uploadedImageURI)
        setProfilePicture(uploadedImageURI); // Call setProfilePicture with the uploaded image URI
        // setAvatar(uploadedImageURI);
      }
    } 
    catch (error) {
      console.error('Upload error:', error);
    }
  };

  

  return (
    <View style={{  alignItems: 'center', justifyContent: 'center' }}>
      {avatar && <Image source={{ uri: avatar }} style={{ width: (150), height: (150), borderRadius: 75 }} />}
      <Button title="העלאת תמונת פרופיל" onPress={pickImage} />
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
