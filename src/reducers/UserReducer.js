import * as types from '../actions/types';

const INITIAL_STATE = {
  user: {
    userName: '',
  },
  auth: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {...state, user: action.payload, auth: true};
      break;
    default:
      return state;
      break;
  }
};
