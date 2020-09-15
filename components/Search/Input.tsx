import React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

const View = styled.View`
  background-color: #f33328;
  height: 60px;
  width: 100%;
  position: absolute;
  z-index: 1;
  align-self: flex-start;
  padding-top: 10px;
`;

const TextInput = styled.TextInput`
  background-color: white;
  height: 40px;
  margin: 0px 30px;
  z-index: 2;
  padding-left: 40px;
  border-radius: 15px;
  font-size: 17px;
`;

const SearchIcons = styled(Ionicons)`
  z-index: 3;
  position: absolute;
  flex-direction: row;
  top: 17px;
  left: 40px;
`;

export default function Input() {
  let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';
  return (
    <View>
      <TextInput placeholder="검색" />
      <SearchIcons name={`${iconName}search`} size={24} color="#f33328" />
    </View>
  );
}
