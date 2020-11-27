import React from 'react';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import moment from 'moment';
import 'moment/locale/ko';
import Fire from '../Fire';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const MainWarp = styled.ScrollView`
  flex: 1;
`;

const ContentsWarp = styled.View`
  padding: 13px;
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
  font-size: 30px;
  font-weight: 900;
`;

const Date = styled.Text`
  margin: 15px 0 15px 0;
  color: #000000aa;
`;

const BloodType = styled.Text``;

const HospitalText = styled.Text``;

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

export default function ({
  route: {
    params: {
      redBlood,
      platelets,
      wholeBlood,
      name,
      bloodType,
      hospitalName,
      text,
      uid,
      timestamp,
      image,
    },
  },
}: any) {
  const navigation = useNavigation();
  return (
    <>
      <MainWarp>
        <Image source={{ uri: image }} />
        <ContentsWarp>
          <Name>{name}</Name>
          <Line></Line>
          <Date>
            <BloodType>🩸{bloodType} ・ </BloodType>
            <HospitalText>{hospitalName} ・ </HospitalText>
            {moment(timestamp).fromNow()}
          </Date>
          <MainText>{text}</MainText>
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
