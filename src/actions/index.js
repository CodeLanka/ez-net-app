import { FETCHED_DATA, START_FETCHING } from './types';

import Api from '../api/Api';

export const actionFetchData = () => (dispatch) => {
  dispatch({ type: START_FETCHING });
  Api.getCombinedData(Api.getCategories, Api.getSites, Api.getThumbnail)
    .then((data) => {
      dispatch({
        type: FETCHED_DATA,
        payload: data,
      });
    });
};
