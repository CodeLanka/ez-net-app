import { FETCH_DATA } from './types';

import Api from '../api/Api';

export const actionFetchData = () => (dispatch) => {
  dispatch({
    type: FETCH_DATA,
    payload: [],
    isFetching: true,
  });
  Api.getCombinedData(Api.getCategories, Api.getSites, Api.getThumbnail)
    .then((data) => {
      dispatch({
        type: FETCH_DATA,
        payload: data,
        isFetching: false,
      });
    });
};
