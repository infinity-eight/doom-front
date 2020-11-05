import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import Input from '../../components/Search/Input';
import List from '../../components/List';
import List2 from '../../components/List2';

const MainWarp = styled.ScrollView`
  background-color: white;
  flex: 1;
  padding-top: 60px;
`;

const TouchableOpacity = styled.TouchableOpacity`
  width: 120px;
  padding: 10px;
  align-self: flex-end;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.3);
`;

const RegisterBtn = styled.Text`
  background-color: white;
  padding: 5px;
  text-align: center;
  border-radius: 10px;
  overflow: hidden;
`;

const ListWarp = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function () {
  const navigation = useNavigation();
  return (
    <>
      <Input />
      <MainWarp>
        <TouchableOpacity onPress={() => navigation.navigate('작성')}>
          <RegisterBtn>도옴이 필요해요</RegisterBtn>
        </TouchableOpacity>
        <ListWarp>
          <List />
          <List2 />
        </ListWarp>
      </MainWarp>
    </>
  );
}
