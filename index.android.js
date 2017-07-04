import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ReactNativeProject from './App';
import DetailScreen from './DetailScreen';
import { StackNavigator } from 'react-navigation';

const SimpleApp = StackNavigator({
  Home: { screen: ReactNativeProject },
  Detail: { screen: DetailScreen },
});


AppRegistry.registerComponent('ReactNativeProject', () => SimpleApp);
