import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Container, Content } from 'native-base';
import PropTypes from 'prop-types';

import TwoColumnView from './src/components/common/TwoColumnView';
import BoxItem from './src/components/common/BoxItem';

import { categories } from './src/api/dummy_api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class ReactNativeProject extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  static navigationOptions = {
    title: 'අන්තර්ජාල නැබ',
  };

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentWillMount() {
    this.setState({
      categories,
    });
  }

  renderCategories() {
    const { navigate } = this.props.navigation;

    const nodes = categories.map(category => (
      <BoxItem
        key={category.id}
        onPress={() => navigate('Detail', { title: category.title, items: category.items })}
        {...category}
      />
    ));

    return (
      <TwoColumnView>
        {nodes}
      </TwoColumnView>
    );
  }

  render() {
    return (
      <Container>
        <Content>
          <View style={styles.container}>
            {this.renderCategories()}
          </View>
        </Content>
      </Container>
    );
  }
}
