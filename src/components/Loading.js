import React from 'react';
import { StyleSheet } from 'react-native';

import Spinner from 'react-native-spinkit';

const TYPE = 'FoldingCube';
const COLOR = '#3F51B5';
const SIZE = 100;

const styles = StyleSheet.create({
  loader: { marginTop: '50%' },
});

const Loading = () => (
  <Spinner
    type={TYPE}
    color={COLOR}
    size={SIZE}
    style={styles.loader}
  />
);

export default Loading;
