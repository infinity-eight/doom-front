import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';
import Main from '../../screens/Main';
import Pin from '../../components/Pin';
import MapTaps from '../MapTaps';

const Text = styled.Text`
  padding: 10px;
  font-size: 15px;
`;

const Name = styled.Text`
  font-size: 25px;
  font-weight: 700;
`;

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
          title: '',
          headerLeft: () => (
            <Text>
              <Name>노수하</Name>님, 안녕하세요
            </Text>
          ),
          headerRight: () => <Pin color="#f33328" />,
        }}
      />
      <MainStack.Screen name="맵" component={MapTaps} />
    </MainStack.Navigator>
  );
}
