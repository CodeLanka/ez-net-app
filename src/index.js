import React from 'react';
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import EZNetApp from './EZNetApp';

const store = compose(applyMiddleware(thunk))(createStore)(reducers);

export default () => (
  <Provider store={store}>
    <EZNetApp />
  </Provider>
);
