import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import _ from 'lodash'
import { Container, Content } from 'native-base';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TwoColumnView from './common/TwoColumnView';
import BoxItem from './common/BoxItem';

import * as actions from './../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class Categories extends Component {
  static propTypes = {
    actionFetchData: PropTypes.func.isRequired,
    categoryData: PropTypes.array.isRequired,
    navigation: PropTypes.object.isRequired,
  };

  static navigationOptions = {
    title: 'අන්තර්ජාල නැබ',
  };

  componentWillMount() {
    this.props.actionFetchData();
  }

  renderCategories() {
    const { navigate } = this.props.navigation;

    const nodes = this.props.categoryData.map(category => (
      <BoxItem
        key={category.id}
        onPress={_.debounce(() => navigate('Detail', { title: category.title, items: category.items }), 750, { leading: true, trailing: false })}
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

const mapStateToProps = ({ data }) => ({
  categoryData: data,
});

export default connect(mapStateToProps, actions)(Categories);
