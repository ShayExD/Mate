import React, { useContext } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider, AuthContext } from './AuthContext';
import { Provider as PaperProvider } from 'react-native-paper';
import MainNavigation from './src/navigation/Navigation';
import Tabs from './src/navigation/tabs';

export default function App() {

  const { loggedInUser} = useContext(AuthContext);


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <AuthProvider>
    <NavigationContainer style={styles.container}>
    <PaperProvider>
            {loggedInUser ? <MainNavigation /> : <Tabs />}
    </PaperProvider>
    </NavigationContainer>
    </AuthProvider>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
})
