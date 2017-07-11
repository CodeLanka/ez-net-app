import { StackNavigator } from 'react-navigation';

import ReactNativeProject from './components/App';
import DetailScreen from './components/DetailScreen';


const EZNetApp = StackNavigator({
  Home: { screen: ReactNativeProject },
  Detail: { screen: DetailScreen },
});

export default EZNetApp;
