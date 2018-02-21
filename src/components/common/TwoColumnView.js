import React from 'react';
import { View } from 'react-native';

import { twoColumnViewStyle } from '../../../assets/styles';

const TwoColumnView = (props) => {
  const { children } = props;

  if (!Array.isArray(children)) {
    console.log('Children to the TwoColumnView is not an array')
    return null;
  }

  const left = [];
  const right = [];

  children.forEach((child, index) => {
    if (index % 2 === 0) { // even
      left.push(child);
    } else {
      right.push(child);
    }
  });

  return (
    <View style={twoColumnViewStyle.layout}>
      <View>
        {left}
      </View>
      <View>
        {right}
      </View>
    </View>
  );
};

export default TwoColumnView;
