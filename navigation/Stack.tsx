import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './Tabs';
import Map from '../screens/Map';
import Login from '../screens/User/Login';
import Register from '../screens/User/Register';
import Writing from '../screens/Writing';

const Stack = createStackNavigator();

export default function () {
  const [isReady, setIsReady] = useState("13123");
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerShown: false,
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
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="작성" component={Writing} />
        </>
      )}
    </Stack.Navigator>
  );
}
