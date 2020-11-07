import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';
import Profile from '../../screens/Profile';
import Fire from '../../Fire';


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
    user: {}
  };

  unsubscribe = null;

  componentDidMount() {
    const user = this.props.uid || Fire.shared.uid;

    this.unsubscribe = Fire.shared.firestore
      .collection('users')
      .doc(user)
      .onSnapshot(doc => {
        this.setState({ user: doc.data() });
      });
  }

  componentWillUnmount() {
    this.unsubscribe();
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
                <Name>{this.state.user.name}</Name> 님, 안녕하세요
              </Text>
            ),
          }}
        />
      </UserStack.Navigator>
    );
  }
}
