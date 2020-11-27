import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import moment from 'moment';
import 'moment/locale/ko';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const Container = styled.TouchableOpacity`
  width: ${WIDTH / 3.5}px;
  margin: 20px auto 10px auto;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.4);
`;

const Image = styled.Image`
  width: 100%;
  height: ${WIDTH / 3.5}px;
  border-radius: 5px;
  border-color: #fff;
  border-width: 1px;
`;

const Name = styled.Text`
  margin-left: 1px;
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
`;

const DateBTWrap = styled.View``;

const BT = styled.Text`
  position: absolute;
  line-height: 20px;
  text-align: center;
`;

const Date = styled.Text`
  position: absolute;
  right: 8px;
  line-height: 20px;
  text-align: center;
  color: #000000aa;
`;

export default function ({
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
}: any) {
  const navigation = useNavigation();
  return (
    <Container
      onPress={() =>
        navigation.navigate('Detail', {
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
        })
      }
    >
      <Image source={{ uri: image }} />
      <Name>{name}</Name>
      <DateBTWrap>
        <BT>🩸{bloodType}</BT>
        <Date>{moment(timestamp).fromNow()}</Date>
      </DateBTWrap>
    </Container>
  );
}
