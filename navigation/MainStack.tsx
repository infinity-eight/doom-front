import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './Tabs';

const Stack = createStackNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode="modal"
        screenOptions={{
          headerShown: false,
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
      <StatusBar barStyle="dark-content" />
    </NavigationContainer>
  );
}
