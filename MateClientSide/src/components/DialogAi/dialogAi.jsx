import React from 'react'
import { View, Button, StyleSheet, ScrollView, I18nManager } from 'react-native'
import { Dialog, Portal, Text } from 'react-native-paper'
import Theme from '../../../assets/styles/theme'
import * as Clipboard from 'expo-clipboard'
import Toast from 'react-native-toast-message'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Alert } from 'react-native'

const DialogAi = (props) => {
  I18nManager.forceRTL(true)

  const copyToClipboard = () => {
    Clipboard.setStringAsync(props.Title)
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
          <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
            <Text style={[Theme.primaryText, styles.rtlText]}>
              {props.Title}
            </Text>
            <TouchableOpacity style={styles.button} onPress={copyToClipboard}>
              <Icon name='copy-outline' size={24} color='#fff' />
              <Text style={styles.buttonText}>Copy to Clipboard</Text>
            </TouchableOpacity>
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
    backgroundColor: Theme.primaryColor.color,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },
})

export default DialogAi
