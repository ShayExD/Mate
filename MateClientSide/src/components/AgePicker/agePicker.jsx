import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const AgePicker = ({ selectedAge, onAgeChange }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const ageOptions = Array.from({ length: 100 }, (_, index) => index + 1);

  const openPicker = () => {
    setModalVisible(true);
  };

  const closePicker = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableArea} onPress={openPicker}>
        <Text style={styles.selectedAge}>
          {selectedAge ? `בחירת גיל: ${selectedAge}` : 'בחירת גיל'}
        </Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedAge}
              onValueChange={(itemValue) => {
                onAgeChange(itemValue);
                closePicker();
              }}
            >
              {ageOptions.map((option) => (
                <Picker.Item key={option} label={`${option}`} value={option} />
              ))}
            </Picker>
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={closePicker}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  touchableArea: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center', // Center the content horizontally
    borderWidth: 1,
    borderColor: 'gray',
  },
  selectedAge: {
    fontSize: 16,
    textAlign: 'center', // Center the text horizontally
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  pickerContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  closeButton: {
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center', // Center the content horizontally
  },
  closeButtonText: {
    fontSize: 16,
    color: 'blue',
    textAlign: 'center', // Center the text horizontally
  },
});

export default AgePicker;