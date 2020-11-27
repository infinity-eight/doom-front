import React from 'react';
import styled from 'styled-components/native';

const Text = styled.Text`
  margin-left: 20px;
  color: #383736;
  font-weight: 700;
  font-size: 18px;
`;

export default function Title({ title }: any) {
  return <Text>{title}</Text>;
}
