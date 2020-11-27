import React from 'react';
import CountDown from 'react-native-countdown-component';
import styled from 'styled-components/native';
import Title from './Title';

const MainView = styled.View`
  margin-bottom: 40px;
`;

const DataWrap = styled.View`
  width: 280px;
  height: 80px;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  border-radius: 30px;
  border-top-left-radius: 0;
  background-color: #eeeeee;
`;

const Image = styled.Image``;

export default function NextBlood({ title }: any) {
  return (
    <MainView>
      <Title title={title} />
      <DataWrap>
        <CountDown
          until={502000}
          size={25}
          onFinish={() => alert('Finished')}
          digitStyle={{ backgroundColor: '#00ff0000', height: 30 }}
          digitTxtStyle={{ color: '#f33328' }}
          timeLabelStyle={{
            color: '#000000',
            fontWeight: 'bold',
            position: 'absolute',
            top: 9,
            left: 48,
          }}
          timeToShow={['D', 'H', 'M']}
          timeLabels={{ d: '일', h: '시간', m: '분' }}
        />
        <Image
          style={{
            height: 60,
            width: 60,
            overflow: 'visible',
            position: 'absolute',
            top: 10,
            left: 275,
          }}
          source={require('../images/character.png')}
        />
      </DataWrap>
    </MainView>
  );
}
