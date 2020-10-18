import React from 'react';
import styled from 'styled-components/native';
import Input from '../../components/Search/Input';
import List from '../../components/List';

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
  margin-top: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default () => (
  <>
    <Input />
    <MainWarp>
      <TouchableOpacity>
        <RegisterBtn>도옴이 필요해요</RegisterBtn>
      </TouchableOpacity>
      <ListWarp>
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
      </ListWarp>
    </MainWarp>
  </>
);
