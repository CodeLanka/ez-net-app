import {FETCH_DATA} from './types';

import Api from '../api/Api';

export const actionFetchData = () => {
  return (dispatch) => {
    Api.getCombinedData(Api.getCategories, Api.getSites)
      .then(data => dispatch({
        type: FETCH_DATA,
        payload: data,
      }));
  };
};
