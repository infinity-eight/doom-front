import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Donation from '../../screens/Donation';
import Pin from '../../components/Pin';
import MapTaps from '../MapTaps';
import Writing from '../../screens/Writing';

const DonationStack = createStackNavigator();

export default function DonationStackScreen() {
  return (
    <DonationStack.Navigator
      mode="modal"
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <DonationStack.Screen
        name="게시판"
        component={Donation}
        options={{
          headerStyle: {
            backgroundColor: '#f33328',
            borderBottomColor: '#f33328',
            shadowColor: '#f33328',
          },
          headerTintColor: '#fff',
          headerRight: () => <Pin color="#fff" />,
        }}
      />
      <DonationStack.Screen name="맵" component={MapTaps} />
      <DonationStack.Screen name="작성" component={Writing} />
    </DonationStack.Navigator>
  );
}
