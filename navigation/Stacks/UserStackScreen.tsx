import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';
import * as firebase from 'firebase';
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

export default class UserStackScreen extends React.Component {
  state = {
    email: '',
    displayName: '',
  };

  componentDidMount() {
    const { email, displayName }: any = firebase.auth().currentUser;

    this.setState({ email, displayName });
  }
  render() {
    return (
      <UserStack.Navigator>
        <UserStack.Screen
          name="MY"
          component={Profile}
          options={{
            title: '',
            headerLeft: () => (
              <Text>
                <Name>{this.state.displayName}</Name>님, 안녕하세요
              </Text>
            ),
          }}
        />
      </UserStack.Navigator>
    );
  }
}
