import React from 'react';
import { Text, Dimensions } from 'react-native';
import Swiper from 'react-native-web-swiper';
import styled from 'styled-components/native';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const MainWarp = styled.View`
  background-color: white;
  flex: 1;
`;

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 3}px;
  margin-bottom: 50px;
`;
const View = styled.View``;

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
          <Text>Slide 1</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(20,200,20,0.3)',
          }}
        >
          <Text>Slide 2</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(200,20,20,0.3)',
          }}
        >
          <Text>Slide 3</Text>
        </View>
      </Swiper>
    </SliderContainer>
  </MainWarp>
);
