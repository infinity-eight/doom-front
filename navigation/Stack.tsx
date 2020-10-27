import React, { useState } from 'react';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Tabs from './Tabs';
import Map from '../screens/Map';
import Login from '../screens/User/Login';
import Register from '../screens/User/Register';
import Writing from '../screens/Writing';

const Stack = createStackNavigator();

export default function () {
  const [isReady, setIsReady] = useState('13123');
  let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
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
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen
            name="작성"
            component={Writing}
            options={
              {
                /* header: ({ goBack }: any) => ({
                right: ( <Ionicons name={`${iconName}close`} onPress={ () => { goBack() } }  /> )
              }) */
                /* headerRight: () => (
                <BackBtn onPress={() => navigation.goBack(null)}>
                  <Ionicons
                    name={`${iconName}close`}
                    color={'black'}
                    size={35}
                    style={{ padding: 10 }}
                  />
              </BackBtn>
              ), */
              }
            }
          />
        </>
      )}
    </Stack.Navigator>
  );
}
