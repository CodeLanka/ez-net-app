import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Container, Content } from 'native-base';
import PropTypes from 'prop-types';

import TwoColumnView from './src/components/common/TwoColumnView';
import BoxItem from './src/components/common/BoxItem';

const categories = [
  {
    id: '1',
    title: 'පුවත් පත්',
    thumbnail: 'CATEGORY_NEWSPAPERS',
    items: [
      {
        id: '1_1',
        title: 'දිවයින',
        thumbnail: 'NEWSPAPERS_DIVAINA',
        url: 'http://www.divaina.com/',
      },
      {
        id: '1_2',
        title: 'ලංකාදීප',
        thumbnail: 'NEWSPAPERS_LANKADEEPA',
        url: 'http://www.lankadeepa.lk/',
      },
      {
        id: '1_3',
        title: 'රිවිර',
        thumbnail: 'NEWSPAPERS_RIVIRA',
        url: 'http://www.rivira.lk/online/',
      },
      {
        id: '1_4',
        title: 'දෙරණ',
        thumbnail: 'NEWSPAPERS_DERANA',
        url: 'http://www.adaderana.lk/',
      },
    ],
  },
];

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
