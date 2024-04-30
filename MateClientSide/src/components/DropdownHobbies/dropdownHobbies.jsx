import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'

const DropdownHobbies = ({ selectedItems, setSelectedItems }) => {
  const hobbies = [
    { label: 'טכנולוגיה', value: 'טכנולוגיה' },
    { label: 'ספורט', value: 'ספורט' },
    { label: 'קריאה', value: 'קריאה' },
    { label: 'מוזיקה', value: 'מוזיקה' },
    { label: 'טיולים', value: 'טיולים' },
    { label: 'בישול', value: 'בישול' },
    { label: 'ציור', value: 'ציור' },
    { label: 'תיקון רכבים', value: 'תיקון רכבים' },
    { label: 'גינון', value: 'גינון' },
    { label: 'סרטים', value: 'סרטים' },
    { label: 'אומנות', value: 'אומנות' },
    { label: 'סדנאות', value: 'סדנאות' },
    { label: 'פיתוח תוכנה', value: 'פיתוח תוכנה' },
    { label: 'מדע', value: 'מדע' },
    { label: 'צילום', value: 'צילום' },
  ]

  const [isOpen, setIsOpen] = useState(false)

  return (
    <View style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        placeholder='בחירת תחביבים'
        data={hobbies}
        value={selectedItems}
        onChange={(item) => setSelectedItems([...selectedItems, item.value])}
        multiple
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 10,
    minWidth: '90%',
  },
})

export default DropdownHobbies
