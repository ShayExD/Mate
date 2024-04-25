import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MultiSelect from 'react-native-multiple-select';

const CountryPicker = ({ selectedCountries, onCountryChange }) => {
  const countries = [
    { id: '1', name: 'USA' },
    { id: '2', name: 'Canada' },
    { id: '3', name: 'UK' },
    { id: '4', name: 'Australia' },
    { id: '5', name: 'Germany' },
    // Add more countries as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Countries to Visit:</Text>
      <MultiSelect
        items={countries}
        uniqueKey="id"
        onSelectedItemsChange={onCountryChange}
        selectedItems={selectedCountries}
        selectText="Pick Countries"
        searchInputPlaceholderText="Search Countries..."
        tagRemoveIconColor="#CCC"
        tagBorderColor="#CCC"
        tagTextColor="#CCC"
        selectedItemTextColor="#CCC"
        selectedItemIconColor="#CCC"
        itemTextColor="#000"
        displayKey="name"
        searchInputStyle={{ color: '#CCC' }}
        submitButtonColor="#48d22b"
        submitButtonText="Submit"
        styleDropdownMenu={{ backgroundColor: '#white' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default CountryPicker;