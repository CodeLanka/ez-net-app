import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Container, Content } from 'native-base';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from 'react-native-spinkit';
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
    categoryData: PropTypes.object.isRequired,
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
    const { categories, isFetching } = this.props.categoryData;
    if (isFetching) {
      return (
        <Spinner
          type="FoldingCube"
          color="#3F51B5"
          size={100}
          style={{ marginTop: '50%' }}
        />);
    }

    let nodes = null;
    nodes = categories.map(category => (
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
