import React from 'react';
import { View, Text } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import styled from 'styled-components/native';

const MainWarp = styled.View`
  background-color: white;
  flex: 1;
`;

const StepView = styled.View`
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
  text-align: center;
`;

const RegisterBtn = styled.TouchableOpacity`
  background-color: #f33328;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  border-radius: 50px;
`;

const RegisterBtnText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const TextInput = styled.TextInput`
  width: 300px;
  height: 300px;
  padding: 8px;
  border: solid 2px #f33328;
  border-radius: 20px;
  margin: 60px 0 10px 0;
  font-size: 13px;
`;

export default () => (
  <MainWarp>
    <ProgressSteps topOffset={100} marginBottom={100}>
      <ProgressStep label="도옴">
        <StepView>
          <Title>어떤 도옴이 필요하신가요?</Title>
          <RegisterBtn>
            <RegisterBtnText>적혈구</RegisterBtnText>
          </RegisterBtn>
        </StepView>
      </ProgressStep>
      <ProgressStep label="정보">
        <StepView>
          <Title>도옴받으실 분의 {'\n'}정보를 적어주세요.</Title>
        </StepView>
      </ProgressStep>
      <ProgressStep label="내용">
        <StepView>
          <Title>도옴받고자 하는 {'\n'}내용을 적어주세요.</Title>
          <TextInput placeholder="내용을 적어주세요." multiline />
          <RegisterBtn>
            <RegisterBtnText>다 적었어요!</RegisterBtnText>
          </RegisterBtn>
        </StepView>
      </ProgressStep>
      <ProgressStep label="사진">
        <StepView>
          <Title>도옴받으실 분의 {'\n'}사진을 올려주세요.</Title>
        </StepView>
      </ProgressStep>
    </ProgressSteps>
  </MainWarp>
);
