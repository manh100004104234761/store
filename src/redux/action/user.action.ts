import dispatchApi from './dispatchApi';
import { Dispatch } from 'redux';
import { RegisterReq, RegisterRes, LoginReq, LoginRes, GetUserInfoRes, LogoutRes } from '../../shared/type/user.type';


export enum REGISTER_KEYS {
  REGISTER_REQ = 'REGISTER_REQ',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_FAILURE = 'REGISTER_FAILURE',
}
export const register = (info: RegisterReq) => (
  dispatch: Dispatch
): Promise<RegisterRes> =>
  dispatchApi(dispatch, {
    endpoint: '/users/index.php',
    method: 'post',
    types: Object.keys(REGISTER_KEYS),
    body: {
      data: info,
    },
  });

export enum LOGIN_KEYS {
  LOGIN_REQ = 'LOGIN_REQ',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
}
export const login = (info: LoginReq) => (
  dispatch: Dispatch
): Promise<LoginRes> =>
  dispatchApi(dispatch, {
    endpoint: '/users/action/login.php',
    method: 'post',
    types: Object.keys(LOGIN_KEYS),
    body: {
      data: info,
    },
  });

export enum PERSIST_TOKEN_TO_STORE_KEYS {
  PERSIST_TOKEN_TO_STORE_SUCCESS = 'PERSIST_TOKEN_TO_STORE_SUCCESS',
}

export const persistToken = () => ({
  type: PERSIST_TOKEN_TO_STORE_KEYS.PERSIST_TOKEN_TO_STORE_SUCCESS,
});

export enum LOGOUT_KEYS {
  LOGOUT_REQ = 'LOGOUT_REQ',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE = 'LOGOUT_FAILURE',
}

export const logout = () => (dispatch: Dispatch): Promise<LogoutRes> =>
  dispatchApi(dispatch, {
    //Fix logout
    endpoint: '/auth/logout',
    method: 'GET',
    types: Object.keys(LOGOUT_KEYS),
    body: {},
  });

export enum GET_USER_INFO_KEYS {
  GET_USER_INFO_REQ = 'GET_USER_INFO_REQ',
  GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS',
  GET_USER_INFO_FAILURE = 'GET_USER_INFO_FAILURE',
}

export const getUserInfo = () => (
  dispatch: Dispatch
): Promise<GetUserInfoRes> =>
  dispatchApi(dispatch, {
    endpoint: '/users/index.php',
    method: 'GET',
    types: Object.keys(GET_USER_INFO_KEYS),
    body: {},
  });
