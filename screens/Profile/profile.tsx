import React from 'react';
import { Text, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const ProfileWarp = styled.View`
  width: 100%;
  height: ${HEIGHT / 3}px;
  background-color: white;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;

export default () => (
  <ProfileWarp>
    <Text>Profile</Text>
  </ProfileWarp>
);
