import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import {windowWidth,windowHeight} from './src/utils'
import Splash from './src/pages/splash';
import Intro from './src/pages/intro';
import Login from './src/pages/login';
import Register from './src/pages/register';
import EditProfile from './src/pages/edit_profile';
import PlanTrip from './src/pages/plan_trip';
import { Provider } from 'react-native-paper';
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import MainNavigation from './src/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <NavigationContainer style={styles.container}>
    <Provider>
    <MainNavigation></MainNavigation>
    </Provider>
    </NavigationContainer>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
    width:'100%',
    height:'100%'
  },
});
