import React from 'react';
import { Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

const MainWarp = styled.ScrollView`
  background-color: white;
  flex: 1;
`;

const HomeWrap = styled.View`
  padding: 10px;
  justify-content: center;
  border-width: 0.5px;
  border-color: #cccccc;
`;

const Title = styled.Text`
  font-size: 20px;
`;

const Text = styled.Text``;

const Reservation = styled.TouchableOpacity`
  margin-right: 10px;
  position: absolute;
  right: 0;
  padding: 5px 10px 5px 10px;
  border-width: 1px;
  border-radius: 50px;
  border-color: #f33328;
`;

const ReservationText = styled.Text`
  color: #f33328;
`;

export default function () {
  let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';
  return (
    <MainWarp>
      <HomeWrap>
        <Title>헌혈의집 신촌센터</Title>
        <Text>1.3km ㅣ 서울 서대문구 신촌로 107 세인빌딩 2층</Text>
        <Text>02-312-1247</Text>
        <Reservation onPress={() => Linking.openURL(`tel:023121247`)}>
          <ReservationText>예약하기</ReservationText>
        </Reservation>
      </HomeWrap>

      <HomeWrap>
        <Title>헌혈의집 신촌연대앞센터</Title>
        <Text>1.4km ㅣ 서울 서대문구 명물길 6 신촌빌딩 8층</Text>
        <Text>02-392-6460</Text>
        <Reservation onPress={() => Linking.openURL(`tel:023926460`)}>
          <ReservationText>예약하기</ReservationText>
        </Reservation>
      </HomeWrap>

      <HomeWrap>
        <Title>헌혈의집 서울역센터</Title>
        <Text>1.9km ㅣ 서울 중구 통일로 13(봉래동2가)</Text>
        <Text>02-752-9020</Text>
        <Reservation onPress={() => Linking.openURL(`tel:027529020`)}>
          <ReservationText>예약하기</ReservationText>
        </Reservation>
      </HomeWrap>

      <HomeWrap>
        <Title>헌혈의집 광화문센터</Title>
        <Text>3.4km ㅣ 서울 종로구 종로 33 그랑서울 2층 (청진동)</Text>
        <Text>02-732-1027</Text>
        <Reservation onPress={() => Linking.openURL(`tel:023926460`)}>
          <ReservationText>예약하기</ReservationText>
        </Reservation>
      </HomeWrap>

      <HomeWrap>
        <Title>헌혈의집 홍대센터</Title>
        <Text>2.6km ㅣ 서울 마포구 양화로 152 대화빌딩 6층...</Text>
        <Text>02-323-5420</Text>
        <Reservation onPress={() => Linking.openURL(`tel:023926460`)}>
          <ReservationText>예약하기</ReservationText>
        </Reservation>
      </HomeWrap>

      <HomeWrap>
        <Title>헌혈의집 노량진역센터</Title>
        <Text>4.4km ㅣ 서울 동작구 노량진로 154 (노량진동)</Text>
        <Text>02-825-2916</Text>
        <Reservation onPress={() => Linking.openURL(`tel:023926460`)}>
          <ReservationText>예약하기</ReservationText>
        </Reservation>
      </HomeWrap>

      <HomeWrap>
        <Title>헌혈의집 대방역센터</Title>
        <Text>4.9km ㅣ 서울 영등포구 노량진로 7 (신길동)</Text>
        <Text>02-825-6560</Text>
        <Reservation onPress={() => Linking.openURL(`tel:023926460`)}>
          <ReservationText>예약하기</ReservationText>
        </Reservation>
      </HomeWrap>

      <HomeWrap>
        <Title>헌혈의집 대학로센터</Title>
        <Text>5.5km ㅣ 서울 종로구 대명길 26 3층 (명륜2가)</Text>
        <Text>02-743-1972</Text>
        <Reservation onPress={() => Linking.openURL(`tel:023926460`)}>
          <ReservationText>예약하기</ReservationText>
        </Reservation>
      </HomeWrap>

      <HomeWrap>
        <Title>헌혈의집 영등포센터</Title>
        <Text>5.6km ㅣ 서울 영등포구 영중로 3 (영등포동4가)</Text>
        <Text>02-2675-1361</Text>
        <Reservation onPress={() => Linking.openURL(`tel:023926460`)}>
          <ReservationText>예약하기</ReservationText>
        </Reservation>
      </HomeWrap>

      <HomeWrap>
        <Title>헌혈의집 연신내센터</Title>
        <Text>7.9km ㅣ 서울 은평구 통일로 855-8 연신내진원와이...</Text>
        <Text>02-353-7750</Text>
        <Reservation onPress={() => Linking.openURL(`tel:023926460`)}>
          <ReservationText>예약하기</ReservationText>
        </Reservation>
      </HomeWrap>
    </MainWarp>
  );
}
