import messaging from '@react-native-firebase/messaging';

export const getToken = async () => {
  const fcmToken = await messaging().getToken();
  console.log(fcmToken);
  return fcmToken;
};
