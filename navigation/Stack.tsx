import React, { useState } from 'react';
import {
  createStackNavigator,
} from '@react-navigation/stack';
import { Platform } from 'react-native';
import Tabs from './Tabs';
import Login from '../screens/User/Login';
import Register from '../screens/User/Register';

const Stack = createStackNavigator();

export default function () {
  const [isReady, setIsReady] = useState();
  let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}
    >
      {isReady == null ? (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </>
      ) : (
        <>
          <Stack.Screen name="Tabs" component={Tabs} />
        </>
      )}
    </Stack.Navigator>
  );
}
