import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import Profile from '../../screens/ProfileScreen';
import SettingScreen from '../../screens/SettingsScreen';
import Fire from '../../Fire';

let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';

const Text = styled.Text`
  padding: 10px;
  font-size: 15px;
`;

const Name = styled.Text`
  font-size: 25px;
  font-weight: 700;
`;

const UserStack = createStackNavigator();

interface Props {
  navigation: any;
}

export default class UserStackScreen extends React.Component<Props> {
  state = {
    user: {},
  };

  unsubscribe = null;

  componentDidMount() {
    const user = this.props.uid || Fire.shared.uid;

    this.unsubscribe = Fire.shared.firestore
      .collection('users')
      .doc(user)
      .onSnapshot((doc) => {
        this.setState({ user: doc.data() });
      });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <UserStack.Navigator
        screenOptions={{
          headerTintColor: '#000000',
          headerBackTitleVisible: false,
        }}
      >
        <UserStack.Screen
          name="프로필"
          component={Profile}
          options={{
            title: '',
            headerLeft: () => (
              <Text>
                <Name>{this.state.user.name}</Name> 님, 안녕하세요
              </Text>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('설정')}
              >
                <Ionicons
                  name={`${iconName}settings`}
                  color={'#f33328'}
                  size={30}
                  style={{ marginRight: 10 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <UserStack.Screen name="설정" component={SettingScreen} />
      </UserStack.Navigator>
    );
  }
}
