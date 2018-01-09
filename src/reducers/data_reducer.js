import { FETCH_DATA } from './../actions/types';

const InitialState = {
  isFetching: true,
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return Object.assign({}, state, {
        categories: action.payload,
        isFetching: action.isFetching,
      });
    default:
      return state;
  }
};
