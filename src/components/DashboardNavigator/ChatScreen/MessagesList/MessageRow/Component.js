import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import relativeDate from 'relative-date';

const MESSAGE_TEXT_MARGIN = 50;

const MessageRowComponent = props => {
  const isCurrentUser = props.isCurrentUser;
  const alignItems = isCurrentUser ? 'flex-end' : 'flex-start';
  const margin = isCurrentUser ? {marginLeft: MESSAGE_TEXT_MARGIN} : {marginRight: MESSAGE_TEXT_MARGIN};
  const username = isCurrentUser ? 'you' : props.message.user.email;
  const date = relativeDate(new Date(props.message.createdAt));

  return (
    <View
      style={styles.container}>
      <View
        style={ [styles.bubbleView, {alignItems: alignItems}, margin, isCurrentUser ? {backgroundColor: 'blue'} : {backgroundColor: 'purple'} ] }>
        <Text
          style={styles.userText} >
          {date + ' - ' + username}
        </Text>
        <Text
          style={styles.messageText}>
          {props.message.text}
        </Text>
      </View>
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    borderRadius: 5
  },
  bubbleView: {
    flex: 1,
    borderRadius: 8,
    padding:8
  },
  userText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  },
  messageText: {
    flex: 1,
    color: 'white',
    fontSize: 16
  }
}

MessageRowComponent.propTypes = {
  isCurrentUser: PropTypes.bool.isRequired,
  message: PropTypes.shape({
    createdAt: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    user: PropTypes.shape({
      email: PropTypes.string.isRequired
    })
  })
}

export default MessageRowComponent;
