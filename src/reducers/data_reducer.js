import { FETCHED_DATA, START_FETCHING } from './../actions/types';

const InitialState = {
  isFetching: false,
  categories: [],
};

export default (state = InitialState, action) => {
  let result = Object.assign({}, state);
  switch (action.type) {
    case FETCHED_DATA:
        return {
            ...result,
            categories: action.payload,
            isFetching: false,
        };
    case START_FETCHING:
        return {
            ...result,
            categories: [],
            isFetching: true,
        };
    default:
      return state;
  }
};
