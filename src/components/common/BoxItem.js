import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableHighlight, View, Platform, Image } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

import { UNKNOWN } from '../../../img/index';

const styles = StyleSheet.create({
  box: {
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.05)',
    margin: 10,
  },
});

class Item extends Component {
  static defaultProps = {
    thumbnail: 'UNKNOWN',
    onPress: () => {},
  };

  static propTypes = {
    thumbnail: PropTypes.string,
    onPress: PropTypes.func,
  };

  render() {
    const { thumbnail, onPress } = this.props;
    let thumbUri = UNKNOWN;
    if (thumbnail !== null) {
      thumbUri = { uri: Platform.OS === 'android' ? `file://${thumbnail}` : thumbnail };
    }
    return (
      <TouchableHighlight onPress={onPress} >
        <View style={styles.box} >
            <Image
                source={thumbUri}
                style={{width:138,height:138}}
            />
          {/* <ResponsiveImage
            source={thumbUri}
            initWidth="138"
            initHeight="138"
          /> */}
        </View>
      </TouchableHighlight>
    );
  }
}

export default Item;
