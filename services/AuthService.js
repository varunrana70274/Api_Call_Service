/* eslint-disable prettier/prettier */
import jwt_decode from 'jwt-decode';
import { useToast } from 'native-base';
import { ToastAndroid } from 'react-native';
import getAxiosInstance from '../helpers/axios';
import { AppStorage } from "../helpers/storage";
import { Toast } from '../src/Pages/ToastPage';

export const AuthService = {
  codeStatus,
  codeRoleType,
  codeSection,
  codeDesigType,
  codeDesigName,
  codeFeature,

  login,
  // refresh,
  createSession,
  destroySession,
  // isLoggedIn,
  getUserDetails,

  checkAccessRole,
};
function codeStatus() {
  return {
    activate: 'AC',
    deactivate: 'DA',
    pending: 'PE',
    verified: 'VE',
    approved: 'AP',
    rejected: 'RJ',
    success: 'SU',
    processing: 'PRO',
    cancel: 'CA',
    history: 'HY',
    historyVerifier: 'HY_VE',
    historyApprover: 'HY_AP',
    draft: 'DR',
    nonObjection: 'NOB',
    objection: 'OBJ',
  };
}

function codeRoleType() {
  return {
    admin: 'AD',
    teacher: 'TD',
    verifier: 'VE',
    approver: 'AP',

    verifier1Transfer: 'TR_VE1',
    verifier2Transfer: 'TR_VE2',
    approverTransfer: 'TR_AP',

    transferProcess: 'TR_PR',
  };
}

function codeDesignation() {
  return {
    test: 'BL',
  };
}

function codeSection() {
  return {
    profile: 'PR',
    transfer: 'TR',
  };
}

function codeDesigType() {
  return {
    block: 'BL',
    district: 'DL',
    state: 'SL',
  };
}

function codeDesigName() {
  return {
    aa: 'AA',
  };
}

function codeFeature() {
  return {
    viewProfile: 'MT_VPR',
    viewNOC: 'MT_VNOC',
    downloadForm: 'MT_DF',
    objectionBtn: 'MT_OB',
    noObjectionBtn: 'MT_NB',
    approveBtn: 'MT_AB',
    rejectBtn: 'MT_RB',
  };
}


// Handle login Start
function login(data) {
  return getAxiosInstance().post('oauth/token', data);
}

function createSession(data, isLogin) {
  AppStorage.saveValue('mesuaAccessToken', data.access_token);
  AppStorage.saveValue('mesuaRefreshToken', data.refresh_token);
  AppStorage.saveValue('mesuaExpiresIn', data.expires_in);
  AppStorage.saveValue('isDashboard', 1);
  AppStorage.saveValue('mesuaAccessCount', "0");
  AppStorage.saveValue('mesuaUserDetails', "[]");
}

function destroySession(isLogout = '') {
  // const toast = useToast();

  if (isLogout === '1') {
    // toast.show({
    //   isClosable: true,
    //   placement: "top",
    //   duration: 2500,
    //   render: () => {
    //     return <Toast Status={'success'} Description={"Logout Successfully."} />
    //   }
    // })
    ToastAndroid.show(
      "Logout Successfully!",
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      25,
      50
    );
    //alert('Logout Successfully');
  } else if (isLogout === '2') {
    alert('Sorry you were accessing an UnAuthorized Page.');
  } else if (isLogout === '3') {
    ToastAndroid.TOP('Session Expired');
    //alert('Session Expired');
  }
  AppStorage.clearValue();
}

async function getTokenDetails() {
  let accessToken = await AppStorage.getValue("mesuaAccessToken");
  let refreshToken = await AppStorage.getValue("mesuaRefreshToken");
  let localObject = {
    accessToken,
    refreshToken
  };
  return localObject;
}

// Handle login end


async function getUserDetails() {
  let tokenObject = await getTokenDetails();
  let accessToken = tokenObject.accessToken;
  if (!accessToken) {
    return;
  }
  let tokenPayload = jwt_decode(accessToken);
  console.warn('tokenPayload =>', tokenPayload)
  let userId = '';
  let name = '';
  let mobile = '';
  let emailId = '';
  let roleId = '';
  let roleName = '';
  let parentUserId = '';

  let accessCount = parseInt(AppStorage.getValue("mesuaAccessCount"));
  if (accessCount > 0) {
    let userDetailsArray = JSON.parse(AppStorage.getValue("mesuaUserDetails"));
    let userDetails = userDetailsArray[userDetailsArray.length - 1];
    userId = userDetails.userId;
    name = userDetails.name;
    mobile = userDetails.mobile;
    emailId = userDetails.emailId;
    roleId = userDetails.roleTypeId;
    roleName = userDetails.roleName;
    parentUserId = userDetails.parentUserId;
  } else {
    userId = tokenPayload.userId;
    name = tokenPayload.name;
    mobile = tokenPayload.mobile;
    emailId = tokenPayload.emailId;
    roleId = tokenPayload.roleTypeId;
    roleName = tokenPayload.roleName;
    parentUserId = tokenPayload.parentUserId;
  }
  let userDetails = {
    userId: userId,
    name: name,
    mobile: mobile,
    emailId: emailId,
    roleId: roleId,
    roleName: roleName,
    parentUserId: parentUserId,
  };
  return userDetails;
}

function checkAccessRole(roleIds) {
  const userDetail = getUserDetails();
  let roleIdsArr = roleIds.split(',');
  let access = false;
  if (roleIdsArr.length > 0) {
    roleIdsArr.forEach(element => {
      if (element === userDetail?.roleId) {
        access = true;
      }
    });
  } else {
    if (roleIds === userDetail?.roleId) {
      access = true;
    }
  }
  return access;
}
