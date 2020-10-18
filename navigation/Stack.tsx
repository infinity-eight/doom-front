import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './Tabs';
import Map from '../screens/Map';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
  screenOptions={{
    headerShown: false
  }}
  >
    <Stack.Screen name="Tabs" component={Tabs} />
    <Stack.Screen name="Map" component={Map} />
  </Stack.Navigator>
);
