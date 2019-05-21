import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

import { connect } from 'react-redux';

import { signupUser } from '../../../../store/session';

import SignUpFormComponent from './Component';

const personImage = require('../../../../images/ic_person_add.png');

class SignUpFormContainer extends Component {

  static navigationOptions = {
    tabBarLabel: ('signup'),
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={personImage}
        style={{tintColor: tintColor}}
      />
    )
  }

  render() {
    return (
      <SignUpFormComponent
        signup={this.props.signup} />
    )
  }
}

SignUpFormContainer.propTypes = {
  signup: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  signup: signupUser
}

export default connect(null, mapDispatchToProps)(SignUpFormContainer);
