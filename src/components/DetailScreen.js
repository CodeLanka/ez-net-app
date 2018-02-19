import React, { Component } from 'react';
import {
  StyleSheet,
  Linking,
} from 'react-native';
import { Container, Content } from 'native-base';

import TwoColumnView from './common/TwoColumnView';
import Item from './common/BoxItem';
import styles from '../assets/styles/detailScreen';

export default class DetailScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
  });

  renderDetails() {
    const { items } = this.props.navigation.state.params;
    const details = items.map(item => (
      <Item
        key={item.key}
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
