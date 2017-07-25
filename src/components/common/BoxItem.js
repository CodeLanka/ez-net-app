import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

import * as staticImages from './../../../img';

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

    return (
      <TouchableHighlight onPress={onPress} >
        <View style={styles.box} >
          <ResponsiveImage
            source={staticImages[thumbnail]}
            initWidth="138"
            initHeight="138"
          />
        </View>
      </TouchableHighlight>
    );
  }
}

export default Item;
