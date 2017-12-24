/* eslint-disable linebreak-style */
import React, {Component} from 'react';
import {
  StyleSheet,
  Linking,
} from 'react-native';
import {Container, Content} from 'native-base';
import PropTypes from 'prop-types';

import TwoColumnView from './common/TwoColumnView';
import BoxItem from './common/BoxItem';

import Api from '../api/Api';

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

  static navigationOptions = ({navigation}) => ({
    title: `${navigation.state.params.title}`,
  });

  renderDetails() {
    const {items} = this.props.navigation.state.params;
    const details = items.map(item => (
      <BoxItem
        key={item.id}
        onPress={() => Linking.openURL(item.url)}
        {...item}
      />
    ));
    return (
      <TwoColumnView>
        {details}
      </TwoColumnView>
    );
  }

  render() {
    return (
      <Container>
        <Content>
          {this.renderDetails()}
        </Content>
      </Container>
    );
  }
}
