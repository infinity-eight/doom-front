import React from 'react';
import { Text } from "react-native";
import Splash, {showSplash, hideSplash} from '@anvilapp/react-native-splash';

export default () =>(
  <Splash visible={true}>
    <Text>Splash</Text>
  </Splash>
)
