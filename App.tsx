import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/Auth/LoginScreen';
import RegisterScreen from './screens/Auth/RegisterScreen';
import MainStack from './navigation/MainStack';
import * as firebase from 'firebase';

const firebaseConfig = {
  ...
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
      animationTypeForReplace: 'push',
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
      animationTypeForReplace: 'push',
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
