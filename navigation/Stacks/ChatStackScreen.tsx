import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from '../../screens/ChatScreen';

const ChatStack = createStackNavigator();

export default function ChatStackScreen() {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen name="채팅" component={Chat} />
    </ChatStack.Navigator>
  );
}
