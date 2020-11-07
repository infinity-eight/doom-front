import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';
import Main from '../../screens/Main';
import Pin from '../../components/Pin';
import MapTaps from '../MapTaps';
import Fire from '../../Fire';

const Text = styled.Text`
  margin-left: 10px;
  font-size: 15px;
`;

const Name = styled.Text`
  font-size: 25px;
  font-weight: 700;
`;

interface Props {
  navigation: any;
}

const MainStack = createStackNavigator();

export default class MainStackScreen extends React.Component<Props> {
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
      <MainStack.Navigator
        mode="modal"
        screenOptions={{
          headerBackTitleVisible: false,
        }}
      >
        <MainStack.Screen
          name="도옴"
          component={Main}
          options={{
            title: '',
            headerLeft: () => (
              <Text>
                <Name>{this.state.user.name}</Name> 님, 안녕하세요
              </Text>
            ),
            headerRight: () => <Pin color="#f33328" />,
          }}
        />
        <MainStack.Screen name="맵" component={MapTaps} />
      </MainStack.Navigator>
    );
  }
}
