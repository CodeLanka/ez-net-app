import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Container, Content } from 'native-base';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loading from './Loading';
import TwoColumnView from './common/TwoColumnView';
import BoxItem from './common/BoxItem';

import * as actions from './../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

class Categories extends Component {
  static propTypes = {
    actionFetchData: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    navigation: PropTypes.object.isRequired,
  };

  static navigationOptions = {
    title: 'අන්තර්ජාල නැබ',
  };

  componentWillMount() {
    this.props.actionFetchData();
  }

  renderCategories() {
    const { categories } = this.props;
    const { navigate } = this.props.navigation;

    const nodes = categories.map(category => (
      <BoxItem
        key={category.id}
        onPress={() => navigate('Detail', { title: category.title, items: category.items })}
        {...category}
      />
    ));

    return nodes === null ? null : (
      <TwoColumnView>
        {nodes}
      </TwoColumnView>
    );
  }

  render() {
    const { isFetching } = this.props;
    return (
      <Container>
        <Content>
          <View style={styles.container}>
            { isFetching ? <Loading /> : this.renderCategories() }
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ data: { categories, isFetching } }) => ({
  categories,
  isFetching,
});

export default connect(mapStateToProps, actions)(Categories);
