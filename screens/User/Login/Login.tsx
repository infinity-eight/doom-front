import React, { useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
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
  margin-bottom: 100px;
`;

const TextInput = styled.TextInput`
  width: 300px;
  height: 40px;
  border: solid 2px white;
  border-bottom-color: #f33328;
  margin-bottom: 20px;
  font-size: 20px;
`;

const LoginBtn = styled.TouchableOpacity`
  background-color: #f33328;
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

export interface FormData {
  id: string;
  password: string;
}

export default function Login() {
  const navigation = useNavigation();
  const [state, setState] = useState<FormData>({
    id: '',
    password: '',
  });

  const handleChange = (name: keyof typeof state) => (
    event: React.ChangeEvent<{
      value: unknown;
    }>,
  ) => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.id == '' && state.password == '') {
      alert('빈칸을 모두 채워주세요!');
    } else {
      console.log('로그인');
      Submit();
    }
  };

  const Submit = () => {
    axios
      .post('/api/application', {
        id: state.id,
        password: state.password,
      })
      .then(function (response) {
        alert('로그인이 완료되었습니다!');
      })
      .catch(function (error) {
        if (error.response) {
          alert('특수문자는 !@#$%^&+=만 사용 가능합니다!');
        }
      });
  };

  return (
    <MainWarp>
      <Image source={require('./../../../assets/icon.png')} />
      <TextInput placeholder="아이디" value={state.id} onChange={handleChange('id')} />
      <TextInput placeholder="비밀번호" secureTextEntry={true} value={state.password} onChange={handleChange('password')} />
      <LoginBtn onPress={() => handleSubmit()}>
        <LoginBtnText>로그인</LoginBtnText>
      </LoginBtn>
      <RegisterBtn onPress={() => navigation.navigate('Register')}>
        <RegisterBtnText>회원가입</RegisterBtnText>
      </RegisterBtn>
    </MainWarp>
  );
}
