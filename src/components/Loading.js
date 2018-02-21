import React from 'react';

import Spinner from 'react-native-spinkit';
import { loaderStyle } from '../../assets/styles';

const Loading = () => (
  <Spinner
    type={loaderStyle.TYPE}
    color={loaderStyle.COLOR}
    size={loaderStyle.SIZE}
    style={loaderStyle.styles.loader}
  />
);

export default Loading;
