import { StyleSheet, Text, View } from 'react-native'
import React, { useState,useCallback  } from 'react'
import { MultipleSelectList } from 'react-native-dropdown-select-list'
import Theme from '../../../assets/styles/theme'

const MultiSelectDropdown = (props) => {
  const [selected, setSelected] = useState([])
  const [data, setData] = useState(props.data.slice(0, 10)); // Initial data, show first 10 items
  const [loadingMore, setLoadingMore] = useState(false);

  const loadMoreData = useCallback(() => {
    // Simulated data loading delay
    if (!loadingMore) {
      setLoadingMore(true);
      setTimeout(() => {
        const newData = props.data.slice(data.length, data.length + 10); // Load next 10 items
        setData([...data, ...newData]);
        setLoadingMore(false);
      }, 1000);
    }
  }, [data, loadingMore, props.data]);

  const handleEndReached = () => {
    if (!loadingMore) {
      loadMoreData();
    }
  };

  return (
    <View style={styles.container}>
      <MultipleSelectList
        placeholder={props.title}
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
          minWidth: '50%',
          maxWidth: '100%',
          alignItems: 'flex-end',
        }}
        dropdownItemStyles={{ width: '100%', justifyContent: 'space-between' }}
        setSelected={(val) => setSelected(val)}
        data={props.data}
        save='value'
        // onSelect={() => alert(selected)}
        fontFamily='OpenSans'
        label={props.title}
        notFoundText='אין דטא להציג'
        searchPlaceholder='חיפוש'
        labelStyles={styles.label}
        badgeStyles={styles.badges}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  label: {
    textAlign:'left',
    color: 'black',
    
    fontFamily: Theme.primaryText.fontFamily,
  },
  badges: {
    // width:'45%',
    alignItems:'center',
    textAlign:'center',
    backgroundColor: Theme.primaryColor.color,
    fontFamily: Theme.primaryText.fontFamily,
  },
})
export default MultiSelectDropdown