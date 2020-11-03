import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';
import Profile from '../../screens/Profile';

const Text = styled.Text`
  padding: 10px;
  font-size: 15px;
`;

const Name = styled.Text`
  font-size: 25px;
  font-weight: 700;
`;

const UserStack = createStackNavigator();

export default function UserStackScreen() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen
        name="MY"
        component={Profile}
        options={{
          title: '',
          headerLeft: () => (
            <Text>
              <Name>노수하</Name>님, 안녕하세요
            </Text>
          ),
        }}
      />
    </UserStack.Navigator>
  );
}
