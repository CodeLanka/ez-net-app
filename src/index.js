import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import EZNetApp from './EZNetApp';

export default () => (
  <Provider store={createStore(reducers)}>
    <EZNetApp />
  </Provider>
);
