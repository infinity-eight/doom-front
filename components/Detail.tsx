import React from 'react';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const MainWarp = styled.ScrollView`
  flex: 1;
`;

const ContentsWarp = styled.View`
  padding: 10px;
`;

const Line = styled.View`
  border-width: 0.5px;
  border-color: #cccccc;
  margin: 10px 0 10px 0;
`;

const Image = styled.Image`
  width: 100%;
  height: ${WIDTH / 1}px;
`;

const Name = styled.Text`
  margin: 10px;
  font-size: 30px;
  font-weight: 900;
`;

const Date = styled.Text``;

const BloodType = styled.Text``;

const MainText = styled.Text`
  font-size: 16px;
`;

const GoBtnView = styled.View`
  position: relative;
  justify-content: center;
  align-items: center;
`;

const GoBtn = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  margin: 10px;

  background-color: #f33328;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

const GoBtnText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export default function () {
  const navigation = useNavigation();
  return (
    <>
      <MainWarp>
        <Image source={require('../images/patient_1.jpg')} />
        <ContentsWarp>
          <Name>김현성</Name>
          <Date>
            ~20-11-10 <BloodType>🩸A+ 혈소판</BloodType>
          </Date>
          <Line></Line>
          <MainText>
            지정헌혈 부탁드립니다. 가족이 병원에 입원하여 수혈을 받는 상황인데,
            혈액이 부족하다고 합니다. 헌혈원은 아무곳에서 가능합니다.
          </MainText>
        </ContentsWarp>
      </MainWarp>
      <GoBtnView>
        <GoBtn onPress={() => navigation.navigate('채팅')}>
          <GoBtnText>채팅으로 문의하기</GoBtnText>
        </GoBtn>
      </GoBtnView>
    </>
  );
}
