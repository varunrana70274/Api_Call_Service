import {CREATE_USER_ACTION} from '../actionTypes';

const initialState = {
  name: '',
  emailId: '',
  mobile: '',
  userId: '',
  roleId: '',
  roleName: '',
  passwordPlain: '',
  confirmPassword: '',
  refrenceCodeId: '',
  nextScreen: '',
  isLogin: false,
  userObj: {},
};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER_ACTION:
      return {
        ...state,
        ...action.payload,
      };

    case 'RESET_USER':
      return {
        name: '',
        emailId: '',
        mobile: '',
        userId: '',
        roleId: '',
        roleName: '',
        passwordPlain: '',
        confirmPassword: '',
        refrenceCodeId: '',
        nextScreen: '',
        isLogin: false,
        userObj: {},
      };

    default:
      return state;
  }
}

export const updateUserDetails = data => {
  return {
    type: CREATE_USER_ACTION,
    payload: data,
  };
};

export const resetUserDetails = () => {
  return {
    type: 'RESET_USER',
  };
};
