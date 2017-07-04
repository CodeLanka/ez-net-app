import { StackNavigator } from 'react-navigation';

import ReactNativeProject from './App';
import DetailScreen from './DetailScreen';


const EZNetApp = StackNavigator({
  Home: { screen: ReactNativeProject },
  Detail: { screen: DetailScreen }
});

export default EZNetApp;
