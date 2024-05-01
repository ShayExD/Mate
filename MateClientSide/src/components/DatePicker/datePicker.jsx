import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DatePickerComponent = ({ selectedDate, onDateChange }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const today = new Date();
  const minDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
  console.log(minDate);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    onDateChange(date);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableArea} onPress={showDatePicker}>
        <Text style={styles.selectedDate}>
          {selectedDate
            ? `בחירת תאריך: ${selectedDate.toLocaleDateString()}`
            : 'תאריך לידה'}
        </Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        maximumDate={minDate}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
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
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
    textAlign: 'left',
    direction: 'rtl',
  },
  selectedDate: {
    fontSize: 16,
    textAlign: 'right',
  },
});

export default DatePickerComponent;