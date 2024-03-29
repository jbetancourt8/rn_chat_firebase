import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Alert } from 'react-native';

import AuthTabs from './AuthTabs';
import LoadingIndicator from './LoadingIndicator';

class AuthScreenComponent extends Component {

  componentDidUpdate(prevProps) {
    if (!prevProps.error && this.props.error) {
      Alert.alert(('error'), this.props.error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <AuthTabs />
        {this.props.loading && <LoadingIndicator />}
      </View>)
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  }
}

AuthScreenComponent.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
}

export default AuthScreenComponent;
