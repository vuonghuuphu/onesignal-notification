
import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from './src/Screens/Home';
import Detail from './src/Screens/Detail';
import PushNotification, {Importance} from 'react-native-push-notification';

const Stack = createNativeStackNavigator();

export default function App() {

  const create_chanel = async() => {
    PushNotification.createChannel(
      {
        channelId: "channel-id", // (required)
        channelName: "My channel", // (required)
        channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
        playSound: false, // (optional) default: true
        soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
  }

 useEffect(() => {
   create_chanel();
 }, [])
 

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{title:"Gửi thông báo"}}/>
        <Stack.Screen name='Detail' component={Detail} options={{title:"Chi tiết thông báo"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


