import React, { useState, useContext,useEffect } from 'react';
import { View, Image, Button, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { VerticalScale, HorizontalScale } from '../../utils';
import Theme from '../../../assets/styles/theme';
import axios from 'axios';
import { AuthContext } from '../../../AuthContext';
import * as Permissions from 'expo-permissions'; // Import Permissions module
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

const AvatarComponent = ({ setProfilePicture  }) => {
  const { loggedInUser } = useContext(AuthContext);


  const [avatar, setAvatar] = useState(loggedInUser.profileImage !== "" ? loggedInUser.profileImage : 'https://i.imgur.com/LBIwlSy.png');
  const [modalVisible, setModalVisible] = useState(false);


  useEffect(() => {
    // Request permissions when the component mounts
    requestPermissions();
  }, []);

  const requestPermissions = async () => {
    const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
    // const { status: mediaLibraryStatus } = await MediaLibrary.requestMediaLibraryPermissionsAsync();
    
    // Handle permissions
    if (cameraStatus !== 'granted') {
      // Permissions not granted, handle accordingly (e.g., show an error message)
      console.log('Camera or media library permissions not granted');
    }
  };


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if(result.canceled){
      return
    }

    if (!result.cancelled) {
      setModalVisible(false)
      setAvatar(result.assets[0].uri);
      setProfilePicture(result.assets[0].uri);
      uploadImage(result.assets[0].uri);
    }
  };
  
  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    
    if(result.canceled){
      return
    }
    
    console.log(result.assets[0].uri)
    
    if (!result.cancelled) {
      setModalVisible(false)
      setAvatar(result.assets[0].uri);
      setProfilePicture(result.assets[0].uri);
      uploadImage(result.assets[0].uri);
    }
  };

  const uploadImage = async (uri) => {
    try {
      const formData = new FormData();
      formData.append('files', {
        uri,
        name: 'AvatarImage' + loggedInUser.id + '.jpg',
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
        const uploadedImageURI = `https://proj.ruppin.ac.il/cgroup72/test2/tar1/images/${uploadedFileName}`;
        setProfilePicture(uploadedImageURI);
      }
    } catch (error) {
      console.error('Upload error:', error);
    }
  };

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      {avatar && <Image source={{ uri: avatar }} style={{ width: 150, height: 150, borderRadius: 75 }} />}
      <Button title="העלאת תמונת פרופיל" onPress={() => setModalVisible(true)} />
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.optionButton} onPress={pickImage}>
              <Text style={styles.optionText}>בחירה מתוך המדיה</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={takePhoto}>
              <Text style={styles.optionText}>צילום תמונה</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.optionText}>ביטול</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  optionButton: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    fontFamily:'OpenSans'
  },
});

export default AvatarComponent;
