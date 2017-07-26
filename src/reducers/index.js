import { combineReducers } from 'redux';

import dataReducer from './data_reducer';

export default combineReducers({
  data: dataReducer,
});
