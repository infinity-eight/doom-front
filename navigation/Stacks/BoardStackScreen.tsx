import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Board from '../../screens/Board';
import Pin from '../../components/Pin';
import MapTaps from '../MapTaps';
import Writing from '../../screens/Writing';

const DonationStack = createStackNavigator();

export default function () {
  return (
    <DonationStack.Navigator
      mode="modal"
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <DonationStack.Screen
        name="게시판"
        component={Board}
        options={{
          title: '도옴을 드릴게요',
          headerLeft: () => '',
          headerRight: () => <Pin color="#fff" />,
          headerStyle: {
            backgroundColor: '#f33328',
            borderBottomColor: '#f33328',
            shadowColor: '#f33328',
          },
          headerTintColor: '#fff',
        }}
      />
      <DonationStack.Screen name="맵" component={MapTaps} />
      <DonationStack.Screen name="작성" component={Writing} />
    </DonationStack.Navigator>
  );
}
