import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Main from '../screens/Main';
import Donation from '../screens/Donation';
import Chat from '../screens/Chat';
import Profile from '../screens/Profile';
import { Platform, StatusBar } from 'react-native';

const Tabs = createBottomTabNavigator();

const getHeaderName = (route: any) =>
  route?.state?.routeNames[route.state.index] || 'Main';

export default ({ navigation, route }: any) => {
  useLayoutEffect(() => {
    const name = getHeaderName(route);
    navigation.setOptions({
      title: name,
    });
  }, [route]);
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
            <Ionicons
              name={iconName}
              color={focused ? '#F33328' : 'grey'}
              size={26}
            />
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
      <Tabs.Screen name="Main" component={Main} />
      <Tabs.Screen name="Donation" component={Donation} />
      <Tabs.Screen name="Chat" component={Chat} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
};
