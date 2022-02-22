import React,{useEffect,useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Styles from '../Style';
import OneSignal from 'react-native-onesignal';
import PushNotification from 'react-native-push-notification';


export default function Home(props) {

const [title, settitle] = useState("");
const [body, setbody] = useState("") ;

  const OneSignal_Init = async () => {
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId('3c5e22a4-83f9-4d6b-85e7-65f49805a515');

      OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
        let notification = notificationReceivedEvent.getNotification();
        console.log(notification)
        notificationReceivedEvent.complete(notification);
      });


      OneSignal.setNotificationOpenedHandler(notification => {
        props.navigation.push("Detail",{
          data_notify : notification.notification.bigPicture,
        });
      });
  };

  const sennotify = async() => {
      const deviceState = await OneSignal.getDeviceState();
      console.log(deviceState.userId)
    try {
      fetch("https://onesignal.com/api/v1/notifications",{
        method:"POST",
        headers:{
          "Content-Type": "application/json; charset=utf-8"
        },
        body:JSON.stringify(
          {
  app_id: "3c5e22a4-83f9-4d6b-85e7-65f49805a515",
  contents: {"en": `${body}`},
  headings: {"en": `${title}`},
  big_picture:"https://brandlogos.net/wp-content/uploads/2020/03/YouTube-icon-SVG-512x512.png",
  large_icon:"https://reactnative.dev/img/tiny_logo.png",
  existing_android_channel_id : "channel-id",
  include_player_ids: [`${deviceState.userId}`],
  data: {
    notificationType : "news-feature"
},
  buttons: [
    {
      action: "Read-button",
      id: 'read-more-button',
      text: 'Xem thêm',
    },
   
],
          }
        )
      });
      console.log("Da gui thong bao ")
    } catch (error) {
      console.log("Lỗi");
    }
  }

  useEffect(() => {
    OneSignal_Init();
  }, [])
  
  return (
    <SafeAreaView style={Styles.Home_container}>
      <View style={Styles.from_sendNotify}>
        <TextInput
          style={Styles.TextInput_sendNotify}
          placeholder="Nhap tieu de"
          onChangeText={(text)=> settitle(text)}
        />

        <TextInput
          style={Styles.TextInput_sendNotify}
          placeholder="Nhap noi dung"
          onChangeText={(text)=> setbody(text)}
        />
      </View>



      <TouchableOpacity
        style={Styles.btn_sendnotify}
        onPress={() => sennotify()}>
        <View>
          <Text style={Styles.text_btn_sendnotify}>Gửi thông báo</Text>
        </View>
      </TouchableOpacity>


    </SafeAreaView>
  );
}
