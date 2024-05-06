import React from 'react'
import { useContext } from 'react'
import { StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider, AuthContext } from './AuthContext'
import { Provider as PaperProvider } from 'react-native-paper'
import MainNavigation from './src/navigation/Navigation'
import Chat from './src/pages/chat'
import Tabs from './src/navigation/tabs'
import ViewProfile from './src/pages/view_profile'

const AppContent = () => {
  const { loggedInUser } = useContext(AuthContext)

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <NavigationContainer style={styles.container}>
        <PaperProvider>
          <MainNavigation />
          {/* <ViewProfile /> */}
          {/* {loggedInUser===null ? <MainNavigation /> : <Tabs />} */}
        </PaperProvider>
      </NavigationContainer>
    </TouchableWithoutFeedback>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
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
