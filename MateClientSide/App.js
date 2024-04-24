import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import {windowWidth,windowHeight} from './src/utils'
import Splash from './src/pages/splash';
import Intro from './src/pages/intro';
import Login from './src/pages/login';
import Register from './src/pages/register';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text> Open lala lala up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}<Register></Register>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
