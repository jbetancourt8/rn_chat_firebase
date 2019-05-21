import React from 'react';
import PropTypes from 'prop-types';

import BasicForm from '../BasicForm';

const LoginFormComponent = props =>
  <BasicForm
    buttonTitle={'login'}
    onButtonPress={props.login} />

LoginFormComponent.propTypes = {
  login: PropTypes.func.isRequired,
}

export default LoginFormComponent
