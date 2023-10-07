import {USER_ADDRESS_ACTION} from '../actionTypes';

const initialState = {
  addressBook: [],
  currAddress: {},
};
export default function addressReducer(state = initialState, action) {
  switch (action.type) {
    case USER_ADDRESS_ACTION:{
      return {
        ...state,
        ...action.payload,
      };
    }
    case 'UPDATE_CURRENT_ADDRESS': {
      console.warn('action.data', action.data);
      return {
        ...state,
        currAddress: {...action.data}
      }
    }
    default:
      return state;
  }
}

export const updateAddressReducer = data => {
  return {
    type: USER_ADDRESS_ACTION,
    payload: data,
  };
};

export const setCurrentAddress = data => {
  return {
    type: 'UPDATE_CURRENT_ADDRESS',
    data,
  }
}
