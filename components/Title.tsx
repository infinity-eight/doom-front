import React from 'react';
import styled from 'styled-components/native';

const Text = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 16px;
  margin-left: 20px;
`;

export default function Title({ title }: any) {
  return <Text>{title}</Text>;
}
