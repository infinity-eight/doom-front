import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Main from '../../screens/Main';
import Pin from '../../components/Pin';

const MainStack = createStackNavigator();

export default function MainStackScreen({ navigation }: any) {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="도옴"
        component={Main}
        options={{
          headerRight: () => <Pin color="#f33328" />,
        }}
      />
    </MainStack.Navigator>
  );
}
