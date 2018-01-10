import React from 'react';

import Spinner from 'react-native-spinkit';

const loaderStyle = {
  type: 'FoldingCube',
  color: '#3F51B5',
  size: 100,
}

const Loading = () => (
  <Spinner
    type={loaderStyle.type}
    color={loaderStyle.color}
    size={loaderStyle.size}
    style={{ marginTop: '50%' }}
  />
);

export default Loading;
