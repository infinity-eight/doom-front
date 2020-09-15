import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Donation from '../../screens/Donation';
import Pin from '../../components/Pin';

const DonationStack = createStackNavigator();

export default function DonationStackScreen() {
  return (
    <DonationStack.Navigator>
      <DonationStack.Screen
        name="기부"
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
    </DonationStack.Navigator>
  );
}
