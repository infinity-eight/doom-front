import React from 'react';
import styled from 'styled-components/native';

const MainWarp = styled.View`
  background-color: white;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  background-color: white;
  width: 150px;
  height: 150px;
  margin-bottom: 60px;
`;

const TextInput = styled.TextInput`
  width: 300px;
  height: 40px;
  border: solid 2px white;
  border-bottom-color: #f33328;
  margin-bottom: 20px;
  font-size: 20px;
`;

const RegisterBtn = styled.TouchableOpacity`
  background-color: #f33328;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  margin-top: 80px;
  border-radius: 50px;
`;

const RegisterBtnText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export default () => (
  <MainWarp>
    <Image source={require('./../../../assets/icon.png')} />
    <TextInput placeholder="이름" />
    <TextInput placeholder="아이디" />
    <TextInput placeholder="비밀번호" />
    <TextInput placeholder="비밀번호 확인" />
    <RegisterBtn>
      <RegisterBtnText>회원가입</RegisterBtnText>
    </RegisterBtn>
  </MainWarp>
);
