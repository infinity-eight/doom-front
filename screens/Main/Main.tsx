import React from 'react';
import { Dimensions } from 'react-native';
import Swiper from 'react-native-web-swiper';
import styled from 'styled-components/native';
import NextBlood from '../../components/NextBlood';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const MainWarp = styled.ScrollView`
  background-color: white;

  flex: 1;
`;

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 3}px;
  margin-bottom: 50px;
`;
const View = styled.View``;

const BackImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const Image = styled.Image`
  margin: 0 auto 0 auto;
`;

export default () => (
  <MainWarp>
    <SliderContainer>
      <Swiper
        loop
        timeout={3}
        controlsProps={{
          dotsTouchable: true,
          nextTitle: '',
          prevTitle: '',
          dotActiveStyle: { backgroundColor: '#F33328' },
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(20,20,200,0.3)',
          }}
        >
          <BackImage source={require('../../images/main_bannner_01.jpg')} />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(20,200,20,0.3)',
          }}
        >
          <BackImage source={require('../../images/main_bannner_02.png')} />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(200,20,20,0.3)',
          }}
        >
          <BackImage source={require('../../images/main_bannner_03.jpg')} />
        </View>
      </Swiper>
    </SliderContainer>
    <NextBlood title={'다음 헌혈가능일까지'} />
    <Image
      style={{ width: '90%', height: 100, overflow: 'visible' }}
      source={require('../../images/blood.png')}
    />
  </MainWarp>
);
