
import {windowWidth,windowHeight} from '../../utils'
import React, {useEffect,useState } from 'react';
import { StyleSheet,Image,Dimensions ,View } from 'react-native';
import Theme from '../../../assets/styles/theme';

import * as Font from 'expo-font';

export default function Splash({navigation}) {

    const [loadingComplete, setLoadingComplete] = useState(false);

    useEffect(() => {

        async function loadFonts() {
        try{
        await Font.loadAsync({
          'OpenSans-Bold': require('../../../assets/fonts/OpenSans-Bold.ttf'),
          'OpenSans': require('../../../assets/fonts/OpenSans-Regular.ttf'),
          'OpenSans-ExtraBold': require('../../../assets/fonts/OpenSans-Bold.ttf'),

        });
        setLoadingComplete(true);
      }
      catch(error){
        console.error('Error loading fonts:', error);
      }
      }
      loadFonts();
   
      }, []);
   
   
       useEffect(()=>{
         if(loadingComplete){
            setTimeout(() => {
                navigation.navigate('Intro');
            }, 4000);
          }
        },[loadingComplete]);

           
   return (
      <View style={[Theme.screen,styles.screen]}>
       <Image
       source={require("../../../assets/images/logo.png")}
       resizeMode="contain"
       style = {styles.image}/>
       </View>
        )
}


const styles = StyleSheet.create({
screen:
{

    justifyContent: 'center',
    alignItems:'center',
},
image:
{
        width:  windowWidth,
        height: windowHeight*0.56
},
});