import React, { useState } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';

const AutocompleteCities = ({ cityNames }) => {
  const [query, setQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const findCities = (query) => {
    if (query === '') {
      return [];
    }

    const regex = new RegExp(`${query.trim()}`, 'i');
    return cityNames.filter(cityName => cityName.search(regex) >= 0);
  };

  const renderCity = (city) => (
    <TouchableOpacity onPress={() => onSelectCity(city)}>
    <Text>{city}</Text>
    </TouchableOpacity>

  );

  return (
    <View>
    <Autocomplete
      autoCapitalize="none"
      autoCorrect={false}
      data={findCities(query)}
      defaultValue={query}
      onChangeText={(text) => {
        setQuery(text);
        setShowDropdown(true);
      }}
      placeholder="Enter city name"
      renderItem={({ item }) => renderCity(item)}
    /></View>
  );
};

export default AutocompleteCities

