import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import MainStackScreen from './Stacks/MainStackScreen';
import DonationStackScreen from './Stacks/DonationStackScreen';
import ChatStackScreen from './Stacks/ChatStackScreen';
import UserStackScreen from './Stacks/UserStackScreen';
import { Platform } from 'react-native';

const Tabs = createBottomTabNavigator();

export default ({ navigation, route }: any) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabStyle: {
          borderTopColor: 'white',
          shadowColor: '#1a000000',
        },
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';
          if (route.name === 'Main') {
            iconName += 'home';
          } else if (route.name === 'Donation') {
            iconName += 'heart';
          } else if (route.name === 'Chat') {
            iconName += 'chatboxes';
          } else if (route.name === 'Profile') {
            iconName += 'contact';
          }
          return (
            <Ionicons name={iconName} color={focused ? '#F33328' : 'grey'} size={26} />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,

        /* style: {
          borderTopColor: 'white',
          shadowColor: '#000000',
          shadowOpacity: 0.3,
          shadowRadius: 5,
          shadowOffset: {
            height: 3,
          },
        }, */
      }}
    >
      <Tabs.Screen name="Main" component={MainStackScreen} />
      <Tabs.Screen name="Donation" component={DonationStackScreen} />
      <Tabs.Screen name="Chat" component={ChatStackScreen} />
      <Tabs.Screen name="Profile" component={UserStackScreen} />
    </Tabs.Navigator>
  );
};
