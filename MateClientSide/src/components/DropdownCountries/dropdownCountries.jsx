import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Entypo } from '@expo/vector-icons';
import axios from 'axios';


const DropdownCountries = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [countries, setCountries] = useState([]);

  const formatCountriesForDropdown = (countries) => {
    return countries.map(country => ({
      label: country,
      value: country
    }));
  };


  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countryNames = response.data.map(country => country.name.common);
        const sortedCountries = countryNames.sort();
        setCountries(sortedCountries);
        // setLoadedCountries(countryNames.slice(0, threshold));
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: '#e6824a' }]}>
          בחר יעד
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: '#e6824a' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={formatCountriesForDropdown(countries)}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'בחר יעד' : '...'}
        searchPlaceholder="חיפוש..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
        <Entypo name="globe" style={styles.icon} size={24}color={isFocus ? '#e6824a' : 'black'} />

        )}
      />
    </View>
  );
};

export default DropdownCountries;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 10,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    right: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});