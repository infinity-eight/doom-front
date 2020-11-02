import React, { useState } from 'react';
import axios from 'axios';
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

export interface FormData {
  name: string;
  id: string;
  password: string;
  repassword: string;
}

export default function () {
  const [state, setState] = useState<FormData>({
    name: '',
    id: '',
    password: '',
    repassword: '',
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
    if (state.name == '' && state.id == '' && state.password == '') {
      alert('빈칸을 모두 채워주세요!');
      console.log(state.name);
    } else if(state.password !== state.repassword) {
      alert('비밀번호가 서로 다릅니다.');
      console.log(state.name);
    } else {
      console.log('회원가입');
      Submit();
    }
  };

  const Submit = () => {
    axios
      .post('/api/application', {
        name: state.name,
        id: state.id,
        password: state.password,
        repassword: state.repassword,
      })
      .then(function (response) {
        alert('회원가입이 완료되었습니다!');
        window.location.href = '/';
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
      <TextInput placeholder="이름" value={state.name} onChange={handleChange('name')} />
      <TextInput placeholder="아이디" value={state.id} onChange={handleChange('id')} />
      <TextInput placeholder="비밀번호" secureTextEntry={true} value={state.password} onChange={handleChange('password')} />
      <TextInput placeholder="비밀번호 확인" secureTextEntry={true} value={state.repassword} onChange={handleChange('repassword')} />
      <RegisterBtn onPress={() => handleSubmit()}>
        <RegisterBtnText>회원가입</RegisterBtnText>
      </RegisterBtn>
    </MainWarp>
  );
}
