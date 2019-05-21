import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from './src/store';

import ChatApp from './src/components/ChatApp';

console.disableYellowBox = true;

const store = configureStore()

const App = () =>
  <Provider store={store}>
    <ChatApp />
  </Provider>

export default App;