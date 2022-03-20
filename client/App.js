import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import {getToken} from './lib/token';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  //앱에서 벗어난 상태이거나, 앱을 종료시킨 상태에서 메시지를 수신했을 때 이벤트 발생
  console.log('Message handled in the background!', remoteMessage);
});

const App = () => {
  useEffect(() => {
    const msg = messaging().onMessage(async remoteMessage => {
      //앱을 실행 중인 상태에서 메시지를 수신했을 때 이벤트 발생
      //channelId 부분 required but 역할을 모르겠음
      console.log('Message handled in the foreground!', remoteMessage);
      PushNotification.localNotification({
        channelId: 'com.client',
        message: remoteMessage.notification.body,
        title: remoteMessage.notification.title,
        bigPictureUrl: remoteMessage.notification.android.imageUrl,
        smallIcon: remoteMessage.notification.android.imageUrl,
      });
    });
    return msg;
  }, []);
  useEffect(() => {
    getToken();
  }, []);
  return (
    <View>
      <Text>HelloWorld</Text>
    </View>
  );
};

export default App;
