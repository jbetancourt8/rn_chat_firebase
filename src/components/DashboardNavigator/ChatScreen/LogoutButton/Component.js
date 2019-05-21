import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image } from 'react-native';

const styles = {
  container: {
    flex: 1,
    marginRight: 10,
    height: 40,
    alignItems: 'center',
    justifyContent:'center'
  }
}

const LogoutButtonComponent = props =>
  <TouchableOpacity
    style={styles.container}
    onPress={props.logout}>

    <Image source={require('../../../../images/ic_exit_to_app.png')} />
  </TouchableOpacity>

LogoutButtonComponent.propTypes = {
  logout: PropTypes.func.isRequired
}

export default LogoutButtonComponent;
