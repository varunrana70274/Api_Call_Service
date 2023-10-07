import {INDICATOR_ACTION} from '../actionTypes';

const initialState = {
  countWishlist: '',
  countCart: '',
};
export default function userCountIndicatorReducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case INDICATOR_ACTION:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export const updateCountIndicator = data => {
  return {
    type: INDICATOR_ACTION,
    payload: data,
  };
};
