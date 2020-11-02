import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Main from '../../screens/Main';
import Pin from '../../components/Pin';
import MapTaps from '../MapTaps';

const MainStack = createStackNavigator();

export default function MainStackScreen({ navigation }: any) {
  return (
    <MainStack.Navigator
      mode="modal"
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <MainStack.Screen
        name="도옴"
        component={Main}
        options={{
          headerRight: () => <Pin color="#f33328" />,
        }}
      />
      <MainStack.Screen name="맵" component={MapTaps} />
    </MainStack.Navigator>
  );
}
