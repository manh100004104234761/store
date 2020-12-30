import dispatchApi from './dispatchApi';
import { Dispatch } from 'redux';
import { RegisterReq, RegisterRes, LoginReq, LoginRes, GetUserInfoRes, LogoutRes, UpdatePasswordReq } from '../../shared/type/user.type';
import { IGetCartDetailRes } from 'src/shared/type/cart.type';
import { IProductIDReq } from 'src/shared/type/product.type';
import { IGetWishlistDetailRes } from 'src/shared/type/wishlist.type';


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
    method: 'POST',
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
    endpoint: '/users/action/logout.php',
    method: 'post',
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


export enum UPDATE_USER_INFO_KEYS {
  UPDATE_USER_INFO_REQ = 'UPDATE_USER_INFO_REQ',
  UPDATE_USER_INFO_SUCCESS = 'UPDATE_USER_INFO_SUCCESS',
  UPDATE_USER_INFO_FAILURE = 'UPDATE_USER_INFO_FAILURE',
}

export const updateUserInfo = (info: any) => (
  dispatch: Dispatch
): Promise<any> =>
  dispatchApi(dispatch, {
    endpoint: '/users/action/updateUser.php',
    method: 'POST',
    types: Object.keys(UPDATE_USER_INFO_KEYS),
    body: {
      data: info,
    },
  });


export enum UPDATE_PASSWORD_USER_KEYS {
  UPDATE_PASSWORD_USER_REQ = 'UPDATE_PASSWORD_USER_REQ',
  UPDATE_PASSWORD_USER_SUCCESS = 'UPDATE_PASSWORD_USER_SUCCESS',
  UPDATE_PASSWORD_USER_FAILURE = 'UPDATE_PASSWORD_USER_FAILURE',
}

export const updatePassword = (info: UpdatePasswordReq) => (
  dispatch: Dispatch
): Promise<any> =>
  dispatchApi(dispatch, {
    endpoint: '/users/action/changePassword.php',
    method: 'POST',
    types: Object.keys(UPDATE_PASSWORD_USER_KEYS),
    body: {
      data: info,
    },
  });

export enum GET_CART_DETAIL_KEYS {
  GET_CART_DETAIL_REQ = 'GET_CART_DETAIL_REQ',
  GET_CART_DETAIL_SUCCESS = 'GET_CART_DETAIL_SUCCESS',
  GET_CART_DETAIL_FAILURE = 'GET_CART_DETAIL_FAILURE',
}

export const getCartDetail = () => (
  dispatch: Dispatch
): Promise<IGetCartDetailRes> =>
  dispatchApi(dispatch, {
    endpoint: '/cart/action/getCart.php',
    method: 'GET',
    types: Object.keys(GET_CART_DETAIL_KEYS),
    body: {}
  })

export enum ADD_TO_CART_KEYS {
  ADD_TO_CART_REQ = 'ADD_TO_CART_REQ',
  ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS',
  ADD_TO_CART_FAILURE = 'ADD_TO_CART_FAILURE',
}

export const addProductToCart = (product_id: IProductIDReq) => (
  dispatch: Dispatch
): Promise<IGetCartDetailRes> =>
  dispatchApi(dispatch, {
    endpoint: '/cart/action/addToCart.php',
    method: 'POST',
    types: Object.keys(ADD_TO_CART_KEYS),
    body: {
      data: product_id
    }
  })

export enum GET_WISHLIST_KEYS {
  GET_WISHLIST_REQ = 'GET_WISHLIST_REQ',
  GET_WISHLIST_SUCCESS = 'GET_WISHLIST_SUCCESS',
  GET_WISHLIST_FAILURE = 'GET_WISHLIST_FAILURE',
}

export const getWishList = () => (
  dispatch: Dispatch
): Promise<IGetWishlistDetailRes> =>
  dispatchApi(dispatch, {
    endpoint: '/users/action/getWishList.php',
    method: 'GET',
    types: Object.keys(GET_WISHLIST_KEYS),
    body: {}
  })


export enum ADD_TO_WISHLIST_KEYS {
  ADD_TO_WISHLIST_REQ = 'ADD_TO_WISHLIST_REQ',
  ADD_TO_WISHLIST_SUCCESS = 'ADD_TO_WISHLIST_SUCCESS',
  ADD_TO_WISHLIST_FAILURE = 'ADD_TO_WISHLIST_FAILURE',
}

export const addProductToWishList = (product_id: IProductIDReq) => (
  dispatch: Dispatch
): Promise<IGetWishlistDetailRes> =>
  dispatchApi(dispatch, {
    endpoint: '/users/action/addWishLish.php',
    method: 'POST',
    types: Object.keys(ADD_TO_WISHLIST_KEYS),
    body: {
      data: product_id
    }
  })
