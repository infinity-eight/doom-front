import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import styled from 'styled-components/native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

const MainWarp = styled.View`
  flex: 1;
`;

export default function () {
  const [location, setLocation] = useState<object>();
  const [errorMsg, setErrorMsg] = useState<string>();
  /* const Region = {
    latitude: location,
    longitude: 1,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  } */
  useEffect(() => {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      setErrorMsg(
        '죄송합니다. Android 에뮬레이터의 Sketch에서는 작동하지 않습니다. 기기에서 사용해보세요!',
      );
    } else {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('위치 액세스 권한이 거부되었습니다.');
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }
  });

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    console.log(text);
  }

  return (
    // {"coords":{"altitude":0,"altitudeAccuracy":-1,"latitude":37.785834,"accuracy":5,"longitude":-122.406417,"heading":-1,"speed":-1},"timestamp":1604289011350.864}
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
    </MainWarp>
  );
}
