import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
} from 'react-native';
import { Container, Content } from 'native-base';
import ResponsiveImage from 'react-native-responsive-image';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.05)',
    margin: 10,
  },
});

export default class DetailScreen extends Component {

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  // Function onButtonPress
  _onPressButton(url) {
    const uri = url;
    Linking.openURL(uri).catch(err => console.error('An error occurred', err));
  }

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
  });

  render() {
    return (
      <Container>
        <Content>
          <View style={[styles.layout]}>
            <TouchableHighlight onPress={() => this._onPressButton('http://www.divaina.com')}>
              <View style={styles.box} >
                <ResponsiveImage source={require('./img/divaina.png')} initWidth="138" initHeight="138" />
              </View>
            </TouchableHighlight>
            <View style={styles.box} >
              <ResponsiveImage source={require('./img/lankadeepa.png')} initWidth="138" initHeight="138" />
            </View>
          </View>
          <View style={[styles.layout]}>
            <View style={styles.box} >
              <ResponsiveImage source={require('./img/rivira.png')} initWidth="138" initHeight="138" />
            </View>
            <View style={styles.box} >
              <ResponsiveImage source={require('./img/derana.png')} initWidth="138" initHeight="138"/>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
