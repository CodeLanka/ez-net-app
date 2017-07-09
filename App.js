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
      },
      {
        id: '1_2',
        title: 'ලංකාදීප',
        thumbnail: 'NEWSPAPERS_LANKADEEPA',
      },
      {
        id: '1_3',
        title: 'රිවිර',
        thumbnail: 'NEWSPAPERS_RIVIRA',
      },
      {
        id: '1_4',
        title: 'දෙරණ',
        thumbnail: 'NEWSPAPERS_DERANA',
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
        onPress={() => navigate('Detail', { title: category.title })}
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
