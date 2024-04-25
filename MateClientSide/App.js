import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import {windowWidth,windowHeight} from './src/utils'
import Splash from './src/pages/splash';
import Intro from './src/pages/intro';
import Login from './src/pages/login';
import Register from './src/pages/register';
import EditProfile from './src/pages/edit_profile';
import Test from './src/pages/test';
import { Provider } from 'react-native-paper';
import { TouchableWithoutFeedback, Keyboard } from 'react-native'

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <Provider>
    <View style={styles.container}>
    <EditProfile></EditProfile>
    </View>
    </Provider>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
  },
});
