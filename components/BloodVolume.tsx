import React from 'react';
import styled from 'styled-components/native';
import Title from './Title';

const MainView = styled.View`
  width: 100%;
`;

const Text = styled.Text`
  margin-right: 20px;
  position: absolute;
  right: 0;
  color: #383736;
  font-weight: 700;
  font-size: 18px;
`;

const ImageWrap = styled.View`
  width: 100%;
  height: 80px;
  margin-top: 20px;
  padding: 0 20px 0 20px;
`;

const Image = styled.Image``;

export default function BloodVolume({ title }: any) {
  return (
    <MainView>
      <Title title={title} />
      <Text>단위:일</Text>
      <ImageWrap>
        <Image
          style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}
          source={require('../images/blood.png')}
        />
      </ImageWrap>
    </MainView>
  );
}
