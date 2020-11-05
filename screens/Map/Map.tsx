import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import styled from 'styled-components/native';

const MainWarp = styled.View`
  flex: 1;
`;

export default function () {
  const [location, setLocation] = useState<object>();
  const [errorMsg, setErrorMsg] = useState<string>();

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    console.log(text);
  }

  return (
    <MainWarp>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        mapType={Platform.OS == 'android' ? 'none' : 'standard'}
        initialRegion={{
          latitude: 37.5642135,
          longitude: 127.0016985,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Marker
        coordinate={{ latitude: 37.5642135, longitude: 127.0016985 }}
        title={'헌혈의집'}
        description={'헌혈의집 입니다.'}
      />
    </MainWarp>
  );
}
