import React, { Component } from 'react';
import { TouchableHighlight, View, Platform, Image, Text } from 'react-native';
import { UNKNOWN } from '../../../assets/images/index';

import { boxItemStyle } from '../../../assets/styles';

class Item extends Component {
  render() {
    const { thumbnail, onPress, title } = this.props;
    let thumbUri = UNKNOWN;
    if (thumbnail !== null) {
      thumbUri = { uri: Platform.OS === 'android' ? `file://${thumbnail}` : thumbnail };
    }
    return (
      <TouchableHighlight onPress={onPress} underlayColor='rgba(0,0,0,0.12)'>
        <View style={boxItemStyle.box}>
          <Image
            source={thumbUri}
            style={{
              height: 135,
              width: 135,
            }}
          />
          <Text style={boxItemStyle.title}>{title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default Item;
