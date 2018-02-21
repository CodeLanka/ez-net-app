import React, { Component } from 'react';
import { Linking } from 'react-native';
import { Container, Content } from 'native-base';

import TwoColumnView from './common/TwoColumnView';
import BoxItem from './common/BoxItem';

export default class DetailScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
  });

  renderDetails() {
    const { items } = this.props.navigation.state.params;
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
