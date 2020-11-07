import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/Auth/LoginScreen';
import RegisterScreen from './screens/Auth/RegisterScreen';
import MainStack from './navigation/MainStack';
import * as firebase from 'firebase';
import { decode, encode } from 'base-64';

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

const firebaseConfig = {
  apiKey: 'AIzaSyCwTU6CX9cBOrIDjEwwVT37vLJkVRQcZWY',
  authDomain: 'doom-fff37.firebaseapp.com',
  databaseURL: 'https://doom-fff37.firebaseio.com',
  projectId: 'doom-fff37',
  storageBucket: 'doom-fff37.appspot.com',
  messagingSenderId: '715745267751',
  appId: '1:715745267751:web:11d54357ec4e9e8bbc7e02',
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const AppStack = createStackNavigator(
  {
    Home: {
      screen: MainStack,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      header: null,
    },
  },
);

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      header: null,
    },
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Loading',
    },
  ),
);
