/* eslint-disable prettier/prettier */
import axios from 'axios';
import {Common} from './common';
import {AppStorage} from './storage';
import {updateUserDetails} from '../redux/reducers/userReducer';
import {AuthService} from '../services/AuthService';
import { useToast } from 'native-base';
import { Toast } from '../src/Pages/ToastPage';
import { ToastAndroid } from 'react-native';
//import Alert from '../src/Component/Alert';

let axiosInstance;
let dispatch;

// const Alert = ({message}) => {
//     const toast = useToast();
//     return toast.show({
//       isClosable: true,
//       placement: 'top',
//       duration: 2500,
//       render: () => {
//         return <Toast Status={'error'} Description={message} />;
//       },
//     });
//   };

function getAxiosInstance(dispatchTemp = null) {
  axiosInstance = axios.create({
    baseURL: Common.baseUrl(),
  });

  if (dispatchTemp) {
    dispatch = dispatchTemp;
  }
  // Function that will be called to refresh authorization
  const refreshAuthLogic = async failedRequest => {
    //console.log("failedRequest->"+JSON.stringify(failedRequest));
    //console.log("is_login->"+JSON.stringify(failedRequest?.config?.data?._parts[2][1]));
    // let headers = failedRequest?.request?._headers;
    // console.log("headers->"+JSON.stringify(headers));
    let responseURL = failedRequest?.request?.responseURL;
    // console.log("responseURL->"+JSON.stringify(responseURL));
    let isToken = responseURL.includes('oauth/token') ? true : false;
    console.log('isToken->' + isToken);
    if (isToken) {
      let isLogin = failedRequest?.config?.data?._parts[2][1];
      if (isLogin == '1') {
        return;
        // this.$common.showMessage(
        //     "That's not the right password or Username. Please try again.",
        //     'danger'
        // );
      } else {
        //AuthService.destroySession("3");
        //navigation.navigate('Home');
      }
    }
    const refreshToken = JSON.parse(
      await AppStorage.getValue('mesuaRefreshToken'),
    );
    var params = new FormData();
    console.log('refreshToken->' + refreshToken);
    params.append('refresh_token', refreshToken);
    params.append('grant_type', 'refresh_token');
    params.append('is_login', '0');

    axiosInstance
      .post(Common.baseUrl() + 'oauth/token', params)
      .then(tokenRefreshResponse => {
        let accessToken = tokenRefreshResponse.data.token;
        AppStorage.saveValue('mesuaAccessToken', accessToken);
        failedRequest.response.config.headers['Authorization'] =
          'Bearer ' + accessToken;
        return Promise.resolve();
      });
  };
  let options = {
    //skipAuthRefresh: true,
    pauseInstanceWhileRefreshing: true,
  };
  //createAuthRefreshInterceptor(axiosInstance, refreshAuthLogic, options);

  axiosInstance.interceptors.request.use(
    async config => {
      if (config.url.includes('oauth')) {
        config.headers.Authorization = 'Basic VVNFUl9DTElFTlRfQVBQOnBhc3N3b3Jk';
      } else if (
        config.url.includes('api.ipify') ||
        config.url.includes('service')
      ) {
      } else {
        const jwtToken = JSON.parse(
          await AppStorage.getValue('mesuaAccessToken'),
        );
        config.baseURL = config.baseURL + 'webapi/';
        config.headers.Authorization = `Bearer ${jwtToken}`;
        // config.headers.set('Authorization', `Bearer ${jwtToken}`);
      }

      return config;
    },
    error => Promise.reject(error),
  );

  axiosInstance.interceptors.response.use(
    response => {
      if (response?.data?.status === false) {
        //alert(response?.data?.message);
        console.log(response?.data?.message);
        ToastAndroid.show(
          `${response?.data?.message}`,
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          25,
          50
        );
      }
      return response;
    },
    error => {
      console.log('==>', error);
      // Unauthorized user
      console.warn('==>', error);
      if (error.response && error.response.status === 401) {
        if (dispatch) {
          //AuthService.destroySession('3');
          AuthService.destroySession('1');
          
          dispatch(updateUserDetails({isLogin: false}));
        }
      }
      return Promise.reject(error);
    },
  );
  return axiosInstance;
}

export default getAxiosInstance;
