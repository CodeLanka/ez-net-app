import React from 'react';

import Spinner from 'react-native-spinkit';

import { Stylesheet } from 'react-native';

const TYPE = 'ChasingDots';
const COLOR = '#3F51B5';
const SIZE = 100;

const styles = Stylesheet.create({
  loader: { marginTop: '50%' },
}};

const Loading = () => (
  <Spinner
     type={TYPE}
     color={COLOR}
     size={SIZE}
     style={styles.loader}
   />
 );
export default Loading;
