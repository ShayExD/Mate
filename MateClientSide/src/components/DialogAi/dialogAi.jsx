import React, { useState } from 'react'
import { ScrollView } from 'react-native';
import { Dialog, Portal, Text } from 'react-native-paper';
import Theme from '../../../assets/styles/theme';

const DialogAi = (props) => {

  return (
    <Portal>
      <Dialog visible={props.visible} onDismiss={props.onDismiss}>
        <Dialog.ScrollArea>
          <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
            <Text style={Theme.primaryText}>{props.Title}</Text>
          </ScrollView>
        </Dialog.ScrollArea>
      </Dialog>
    </Portal>
  );
};

export default DialogAi;