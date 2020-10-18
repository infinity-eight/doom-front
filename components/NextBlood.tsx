import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Title from './Title';

const DataWrap = styled.View`
  width: 70%;
  height: 80px;
  margin-left: 20px;
  border-radius: 30px;
  border-top-left-radius: 0;
  background-color: #eeeeee;
`;

export default function NextBlood({ title }: any) {
  return (
    <View>
      <Title title={title} />
      <DataWrap></DataWrap>
    </View>
  );
}
