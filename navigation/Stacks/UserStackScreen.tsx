import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../../screens/Profile';

const UserStack = createStackNavigator();

export default function UserStackScreen() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen name="MY" component={Profile} />
    </UserStack.Navigator>
  );
}
