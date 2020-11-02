import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Map from '../screens/Map';
import Place from '../screens/Place';

const Tab = createMaterialTopTabNavigator();

export default function MapTaps() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="장소" component={Place} />
      <Tab.Screen name="지도" component={Map} />
    </Tab.Navigator>
  );
}
