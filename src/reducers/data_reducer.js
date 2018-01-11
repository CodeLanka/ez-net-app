import { FETCHED_DATA, START_FETCHING } from './../actions/types';

const InitialState = {
  isFetching: false,
  categories: [],
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case FETCHED_DATA:
      return Object.assign({}, state, {
        categories: action.payload,
        isFetching: false,
      });
    case START_FETCHING:
      return { ...state, categories: [], isFeching: true } 
    default:
      return state;
  }
};
