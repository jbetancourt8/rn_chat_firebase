import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

import MessagesList from './MessagesList';
import MessageForm from './MessageForm';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#eeeeee'
  }
}

const ChatScreenComponent = () =>
  <KeyboardAvoidingView
    style={styles.container}
    behavior='padding'
    keyboardVerticalOffset={64}>

    <MessagesList />
    <MessageForm />
  </KeyboardAvoidingView>

export default ChatScreenComponent
