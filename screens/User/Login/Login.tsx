import React from 'react';
import styled from 'styled-components/native';
import Register from '../Register';

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
  margin-bottom: 100px;
`;

const TextInput = styled.TextInput`
  width: 300px;
  height: 40px;
  border: solid 2px white;
  border-bottom-color: #F33328;
  margin-bottom: 20px;
  font-size: 20px;
`;

const LoginBtn = styled.TouchableOpacity`
  background-color: #F33328;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  margin-top: 160px;
  border-radius: 50px;
`;

const LoginBtnText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const RegisterBtn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  border-radius: 50px;
`;

const RegisterBtnText = styled.Text`
  color: #0000008d;
  font-size: 15px;
`;

export default () => (
  <MainWarp>
    <Image source={require('./../../../assets/icon.png')} />
    <TextInput placeholder="아이디" />
    <TextInput placeholder="비밀번호" />
    <LoginBtn><LoginBtnText>로그인</LoginBtnText></LoginBtn>
    <RegisterBtn onPress={Register}><RegisterBtnText>회원가입</RegisterBtnText></RegisterBtn>

  </MainWarp>
);
