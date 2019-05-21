import React from 'react'
import PropTypes from 'prop-types'

import { ActivityIndicator } from 'react-native'

import DashboardNavigator from '../DashboardNavigator'
import AuthScreen from '../AuthScreen'

const ChatAppComponent = props => {
  if (props.restoring) {
    return <ActivityIndicator style={styles.activityIndicator} />
  } else {
    if (props.logged) {
      return <DashboardNavigator />
    } else {
      return <AuthScreen />
    }
  }
}

const styles = {
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
}

ChatAppComponent.propTypes = {
  restoring: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
}

export default ChatAppComponent
