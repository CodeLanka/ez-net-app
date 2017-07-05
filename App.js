import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { Container, Content } from 'native-base';
import ResponsiveImage from 'react-native-responsive-image';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  layout: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.05)',
    margin: 10
  }
});

export default class ReactNativeProject extends Component {

  static navigationOptions = {
    title: 'අන්තර්ජාල නැබ'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>

          <View style={[styles.layout]}>
            <TouchableHighlight onPress={() => navigate('Detail', { title: 'පුවත් පත්' })}>
              <View style={styles.box}>
                <ResponsiveImage source={require('./img/news-papers.png')} initWidth="138" initHeight="138" />
              </View>
            </TouchableHighlight>
            <View style={styles.box}>
              <ResponsiveImage source={require('./img/unknown.png')} initWidth="138" initHeight="138" />
            </View>
          </View>

          <View style={[styles.layout]}>
            <View style={styles.box}>
              <ResponsiveImage source={require('./img/unknown.png')} initWidth="138" initHeight="138" />
            </View>
            <View style={styles.box}>
              <ResponsiveImage source={require('./img/unknown.png')} initWidth="138" initHeight="138" />
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
