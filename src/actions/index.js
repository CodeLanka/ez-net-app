import { FETCH_DATA } from './types';

import { categories as data } from './../api/dummy_api';

export const actionFetchData = () => ({
  type: FETCH_DATA,
  payload: data,
});
