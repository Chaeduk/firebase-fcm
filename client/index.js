import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification, {Importance} from 'react-native-push-notification';

PushNotification.createChannel(
  {
    channelId: 'com.client',
    channelName: 'com.client',
    importance: Importance.HIGH,
  },
  created => console.log(`createChannel return ${created}`),
);

AppRegistry.registerComponent(appName, () => App);
