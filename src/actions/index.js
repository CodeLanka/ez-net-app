import { FETCHED_DATA, START_FETCHING } from './types';
import {AsyncStorage} from 'react-native';
import Api from '../api/Api';

export const actionFetchData = () => (dispatch) => {
  dispatch({ type: START_FETCHING });
  AsyncStorage.getItem('data').then(
      (value)=>{
          if(value){
              dispatch({
                type: FETCHED_DATA,
                payload: JSON.parse(value),
              });
          }
          else{
              Api.getCombinedData(Api.getCategories, Api.getSites, Api.getThumbnail)
                .then((data) => {
                  dispatch({
                    type: FETCHED_DATA,
                    payload: data,
                  });
                  AsyncStorage.setItem('data', JSON.stringify(data));
              });
          }
      }
  );
};
