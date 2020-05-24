import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {Colors, Dimensions} from '../../constants';
import styles from './styles';

const Home = props => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

mapStateToProps = state => {
  const {user} = state.UserReducer;
  return {user};
};

export default connect(
  mapStateToProps,
  {},
)(Home);
