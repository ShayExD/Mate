import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Theme from '../../../assets/styles/theme'
const TextView  = ({ title, content }) => {

  return (
    <View style={styles.labelContainer}>
    <Text style={styles.smallTitle}>{title}</Text>

      <Text style={styles.textAttributes}> {content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
      smallTitle: {
        color: Theme.primaryColor.color
      },
      inputsContainer: {
        // marginTop: VerticalScale(44),
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        direction: 'rtl',
      },
      labelContainer: {
        minWidth: '90%',
        maxWidth: '90%',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'flex-start', // Center the content horizontally
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10
      },
      text: {
        color: 'gray',
        marginHorizontal: 0,
      },
      textAttributes: {
        textAlign: 'left',
        direction: 'rtl',
        color: 'black',
        fontSize: 18,
        // marginBottom: 10,
        // marginRight: 120,
      },
    
      button: {
        marginTop: 10,
      },});

export default TextView;