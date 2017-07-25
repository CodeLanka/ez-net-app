import { FETCH_DATA } from './../actions/types';

const InitialState = [];

export default (state = InitialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      {
        return action.payload;
      }
    default:
      return state;
  }
};
