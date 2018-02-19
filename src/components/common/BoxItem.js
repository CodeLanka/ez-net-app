import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableHighlight, View, Platform, Image } from 'react-native';

import { UNKNOWN } from '../../../assets/images/index';

const styles = StyleSheet.create({
  box: {
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.05)',
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
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
      <TouchableHighlight onPress={onPress} underlayColor='rgba(0,0,0,0.12)'>
        <View style={styles.box}>
          <Image
            source={thumbUri}
            style={{
              height: 135,
              width: 135,
            }}
          />
        </View>
      </TouchableHighlight>
    );
  }
}

export default Item;
