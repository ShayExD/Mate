import SelectDropdown from 'react-native-select-dropdown'
import IsraelCities from '../../utils/citiesInIsrael';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput,KeyboardAvoidingView ,Platform} from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import { VerticalScale } from '../../utils';

const CitiesComponent = () => {
    const [selected, setSelected]  = useState('');

    const preprocessedData = IsraelCities.map(city => ({
        key: `${city.name} (${city.english_name})`,
        value: city.name,
        englishName: city.english_name,
      }));


  return (
   
     <View style={styles.container}>
     <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={preprocessedData} 
        boxStyles={{
            direction: 'rtl',
            textAlign: 'center',
            minWidth: '100%',
            alignItems:'center'
          }}
          inputStyles={{
            fontSize: 16,
            textAlign: 'right',
            alignContent: 'center',

          }}
          dropdownStyles={{
            textAlign: 'right',
            alignItems: 'flex-end'
          }}

        save="value"
        search={true}
        renderItem={(item, styleProps) => (
        <View style={styleProps.listItemContainer}>
        <Text style={styleProps.listItemLabel}>{`${item.value}`}</Text>
        </View>
        )}
    />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignItems: 'center',
        marginBottom: VerticalScale(24),
        justifyContent: 'flex-end',

    
      },
    inputStyle: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
      },
});

export default CitiesComponent