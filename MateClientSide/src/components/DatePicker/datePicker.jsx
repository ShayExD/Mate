import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePickerComponent = ({ selectedDate, onDateChange }) => {
  const [showPicker, setShowPicker] = useState(false);

  const openPicker = () => {
    setShowPicker(true);
  };

  const onChange = (event, selected) => {
    setShowPicker(false);
    if (selected) {
      onDateChange(selected);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableArea} onPress={openPicker}>
        <Text style={styles.selectedDate}>
          {selectedDate
            ? `תאריך לידה: ${selectedDate.toLocaleDateString()}`
            : 'תאריך לידה'}
        </Text>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          value={selectedDate || new Date()}
          mode="date"
          display="spinner"
          onChange={onChange}
        />
      )}
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
  selectedDate: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default DatePickerComponent;