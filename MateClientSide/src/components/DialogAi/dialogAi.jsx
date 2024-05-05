import React from 'react'
import { View, Button, StyleSheet, ScrollView, I18nManager } from 'react-native'
import { Dialog, Portal, Text } from 'react-native-paper'
import Theme from '../../../assets/styles/theme'
import * as Clipboard from 'expo-clipboard'
import Toast from 'react-native-toast-message'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Alert } from 'react-native'
import { VerticalScale } from '../../utils'

const DialogAi = (props) => {
  I18nManager.forceRTL(true)

  const copyToClipboard = () => {
    Clipboard.setStringAsync(props.text)
    Toast.show({
      type: 'success',
      text1: 'Text Copied',
      text2: 'The text has been copied to the clipboard.',
    })
    Alert.prompt(
      'Text copy to clipboard',
      'Text copy to clipboard',
      [{ text: 'OK' }],
      { cancelable: false }
    );
  }

  return (
    <Portal>
      <Dialog visible={props.visible} onDismiss={props.onDismiss}>
        <Toast />
        <Dialog.Content>
          <ScrollView contentContainerStyle={{ alignItems: 'center',paddingTop:30 }}>
          <TouchableOpacity style={[styles.button,{position:'absolute',left:5}]} onPress={copyToClipboard}>
              <Icon name='copy-outline' size={24} color={Theme.primaryColor.color} />
              <Text style={styles.buttonText}>Copy</Text>
            </TouchableOpacity>
            <Text style={[Theme.primaryText, styles.rtlText]}>
            {props.text ? props.text.replace(/\*/g, '') : ''}
            </Text>
            {/* <TouchableOpacity style={styles.button} onPress={copyToClipboard}>
              <Icon name='copy-outline' size={24} color='#fff' />
              <Text style={styles.buttonText}>Copy to Clipboard</Text>
            </TouchableOpacity> */}
          </ScrollView>
        </Dialog.Content>
      </Dialog>
    </Portal>
  )
}

const styles = StyleSheet.create({
  
  rtlText: {
    textAlign: 'right',
    writingDirection: 'rtl',
  },
  check: {},
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: Theme.primaryColor.color,
    borderColor:Theme.primaryColor.color,
    paddingHorizontal: 15,
    borderWidth:1,
    paddingVertical: 10,
    borderRadius: 8,
    marginVertical: VerticalScale(10),
  },
  buttonText: {
    color:Theme.primaryColor.color,
    fontSize: 16,
    marginLeft: 5,
  },
})

export default DialogAi
