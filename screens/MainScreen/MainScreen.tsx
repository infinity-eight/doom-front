import React from 'react';
import { Dimensions } from 'react-native';
import Swiper from 'react-native-web-swiper';
import styled from 'styled-components/native';
import NextBlood from '../../components/NextBlood';
import BloodVolume from '../../components/BloodVolume';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const MainWarp = styled.ScrollView`
  background-color: white;
  flex: 1;
`;

const SliderContainer = styled.View`
  width: 100%;
  padding: 10px;
  height: ${HEIGHT / 2.8}px;
  margin-bottom: 20px;
`;

const View = styled.View`
  flex: 0.9;

  border-radius: 20px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

const BackImage = styled.Image`
  width: 100%;
  height: 100%;
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
          dotsWrapperStyle: { position: 'absolute', top: 0 },
          dotActiveStyle: { backgroundColor: '#F33328' },
        }}
      >
        <View>
          <BackImage source={require('../../images/main_banner_01.jpg')} />
        </View>
        <View>
          <BackImage source={require('../../images/main_banner_02.jpg')} />
        </View>
        <View>
          <BackImage source={require('../../images/main_banner_03.jpg')} />
        </View>
      </Swiper>
    </SliderContainer>
    <NextBlood title={'다음 헌혈가능일까지'} />
    <BloodVolume title={'지금 혈액량은'} />
  </MainWarp>
);
