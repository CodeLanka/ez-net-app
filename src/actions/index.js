/* eslint-disable linebreak-style */
import { FETCH_DATA } from './types';

import Api from '../api/Api';

export const actionFetchData = () => (dispatch) => {
  Api.getCombinedData(Api.getCategories, Api.getSites, Api.getThumbnail)
    .then((data) => {
      dispatch({
        type: FETCH_DATA,
        payload: data,
      });
    });
};
