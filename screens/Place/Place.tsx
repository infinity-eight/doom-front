import React from 'react';
import { Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

const MainWarp = styled.ScrollView`
  background-color: white;
  flex: 1;
`;

const View = styled.TouchableOpacity`
  padding: 10px;
  justify-content: center;
  border-width: 0.5px;
  border-color: #cccccc;
  margin: 10px 0 10px 0;
`;

const Title = styled.Text`
  font-size: 20px;
`;

const Text = styled.Text``;

const Icon = styled(Ionicons)`
  margin-right: 10px;
  position: absolute;
  right: 0;
`;

export default function () {
  let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';
  return (
    <MainWarp>
      <View onPress={() => Linking.openURL(`tel:023121247`)}>
        <Title>헌혈의집 신촌센터</Title>
        <Text>1.3km ㅣ 서울 서대문구 신촌로 107 세인빌딩 2층</Text>
        <Text>02-312-1247</Text>
        <Icon name={`${iconName}call`} color={'#f33328'} size={50} />
      </View>
      <View onPress={() => Linking.openURL(`tel:023926460`)}>
        <Title>헌혈의집 신촌연대앞센터</Title>
        <Text>1.4km ㅣ 서울 서대문구 명물길 6 신촌빌딩 8층</Text>
        <Text>02-392-6460</Text>
        <Icon name={`${iconName}call`} color={'#f33328'} size={50} />
      </View>
    </MainWarp>
  );
}
