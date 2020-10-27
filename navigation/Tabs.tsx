import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import MainStackScreen from './Stacks/MainStackScreen';
import DonationStackScreen from './Stacks/DonationStackScreen';
import ChatStackScreen from './Stacks/ChatStackScreen';
import UserStackScreen from './Stacks/UserStackScreen';
import { Platform } from 'react-native';

const Tabs = createBottomTabNavigator();

const getHeaderName = (route: any) =>
  route?.state?.routeNames[route.state.index] || '도옴';

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
          if (route.name === '도옴') {
            iconName += 'home';
          } else if (route.name === '도네') {
            iconName += 'heart';
          } else if (route.name === '채팅') {
            iconName += 'chatboxes';
          } else if (route.name === '프로필') {
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
      }}
    >
      <Tabs.Screen name="도옴" component={MainStackScreen} />
      <Tabs.Screen name="도네" component={DonationStackScreen} />
      <Tabs.Screen name="채팅" component={ChatStackScreen} />
      <Tabs.Screen name="프로필" component={UserStackScreen} />
    </Tabs.Navigator>
  );
};
