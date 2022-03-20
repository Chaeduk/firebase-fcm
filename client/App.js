import React, {useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  //앱에서 벗어난 상태이거나, 앱을 종료시킨 상태에서 메시지를 수신했을 때 이벤트 발생
  console.log('Message handled in the background!', remoteMessage);
});

const App = () => {
  useEffect(() => {
    const msg = messaging().onMessage(async remoteMessage => {
      console.log(remoteMessage);
      Alert.alert('A new FCM message arrived', JSON.stringify(remoteMessage));
    });
    return msg;
  }, []);
  return (
    <View>
      <Text>HelloWorld</Text>
    </View>
  );
};

export default App;
