import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import axios from 'axios';

const CountryPicker = ({ selectedCountries, onCountryChange }) => {
const [countries,setCountries]=useState([])

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countryNames = response.data.map(country => country.name.common);
        const sortedCountries = countryNames.sort();
        setCountries(sortedCountries);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  const formatCountriesForDropdown = (countries) => {
    return countries.map(country => ({
      id: country,
      name: country
    }));
  };



  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Countries to Visit:</Text>
      <MultiSelect
        items={formatCountriesForDropdown(countries)}
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