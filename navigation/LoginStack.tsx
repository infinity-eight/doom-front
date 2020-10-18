import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/User/Login';
import Register from '../screens/User/Register';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
  screenOptions={{
    headerShown: false
  }}
  >
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
);
