import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Asset } from 'expo-asset';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Stack from './navigation/Stack';
import LoginStack from './navigation/LoginStack';

const cacheImages = (images: any[]) =>
  images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const cacheFonts = (fonts: any[]) => fonts.map((font) => Font.loadAsync(font));

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loadAssets = (): any => {
    const images = cacheImages([
      'https://i.kym-cdn.com/photos/images/newsfeed/000/290/992/0aa.jpg',
      require('./assets/splash.png'),
    ]);
    const fonts = cacheFonts([Ionicons.font, FontAwesome.font]);
    return Promise.all([...images, ...fonts]);
  };
  const onFinish = () => setIsReady(true);
  return isReady ? (
    <>
    {isLoggedIn 
    ? (<>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>  
      <StatusBar barStyle="dark-content" />
    </>) 
    : (<>
      <NavigationContainer>
        <LoginStack />
      </NavigationContainer>  
      <StatusBar barStyle="dark-content" />
    </>)
    }
  </>
  ):(
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}
