import dispatchApi from './dispatchApi';
import { Dispatch } from 'redux';
import { RegisterReq, RegisterRes, LoginReq, LoginRes, GetUserInfoRes, LogoutRes, UpdatePasswordReq, blockUserReq } from '../../shared/type/user.type';
import { checkoutReq, IGetCartDetailRes } from 'src/shared/type/cart.type';
import { IProductIDReq, IProductReviewReq } from 'src/shared/type/product.type';
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

export enum LOGIN_ADMIN_KEYS {
  LOGIN_ADMIN_REQ = 'LOGIN_ADMIN_REQ',
  LOGIN_ADMIN_SUCCESS = 'LOGIN_ADMIN_SUCCESS',
  LOGIN_ADMIN_FAILURE = 'LOGIN_ADMIN_FAILURE',
}
export const loginAdmin = (info: LoginReq) => (
  dispatch: Dispatch
): Promise<LoginRes> =>
  dispatchApi(dispatch, {
    endpoint: '/admin/users/action/login.php',
    method: 'post',
    types: Object.keys(LOGIN_ADMIN_KEYS),
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
): Promise<any> =>
  dispatchApi(dispatch, {
    endpoint: '/cart/action/addToCart.php',
    method: 'POST',
    types: Object.keys(ADD_TO_CART_KEYS),
    body: {
      data: product_id
    }
  })

export enum REMOVE_ONE_PRODUCT_KEYS {
  REMOVE_ONE_PRODUCT_REQ = 'REMOVE_ONE_PRODUCT_REQ',
  REMOVE_ONE_PRODUCT_SUCCESS = 'REMOVE_ONE_PRODUCT_SUCCESS',
  REMOVE_ONE_PRODUCT_FAILURE = 'REMOVE_ONE_PRODUCT_FAILURE',
}

export const removeOneProductFromCart = (product_id: IProductIDReq) => (
  dispatch: Dispatch
): Promise<any> =>
  dispatchApi(dispatch, {
    endpoint: '/cart/action/removeProductFromCart.php',
    method: 'POST',
    types: Object.keys(REMOVE_ONE_PRODUCT_KEYS),
    body: {
      data: product_id
    }
  })

export enum DELETE_PRODUCT_FROM_CART_KEYS {
  DELETE_PRODUCT_FROM_CART_REQ = 'DELETE_PRODUCT_FROM_CART_REQ',
  DELETE_PRODUCT_FROM_CART_SUCCESS = 'DELETE_PRODUCT_FROM_CART_SUCCESS',
  DELETE_PRODUCT_FROM_CART_FAILURE = 'DELETE_PRODUCT_FROM_CART_FAILURE',
}

export const deleteProductFromCart = (product_id: IProductIDReq) => (
  dispatch: Dispatch
): Promise<any> =>
  dispatchApi(dispatch, {
    endpoint: '/cart/action/deletePropduct.php',
    method: 'POST',
    types: Object.keys(DELETE_PRODUCT_FROM_CART_KEYS),
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

export enum GET_ODERS_KEYS {
  GET_ODERS_REQ = 'GET_ODERS_REQ',
  GET_ODERS_SUCCESS = 'GET_ODERS_SUCCESS',
  GET_ODERS_FAILURE = 'GET_ODERS_FAILURE',
}

export const getOrders = () => (
  dispatch: Dispatch
): Promise<IGetWishlistDetailRes> =>
  dispatchApi(dispatch, {
    endpoint: '/cart/action/getHistoryOrders.php',
    method: 'POST',
    types: Object.keys(GET_ODERS_KEYS),
    body: {}
  })


export enum ADD_TO_WISHLIST_KEYS {
  ADD_TO_WISHLIST_REQ = 'ADD_TO_WISHLIST_REQ',
  ADD_TO_WISHLIST_SUCCESS = 'ADD_TO_WISHLIST_SUCCESS',
  ADD_TO_WISHLIST_FAILURE = 'ADD_TO_WISHLIST_FAILURE',
}

export const addProductToWishList = (product_id: IProductIDReq) => (
  dispatch: Dispatch
): Promise<any> =>
  dispatchApi(dispatch, {
    endpoint: '/users/action/addWishLish.php',
    method: 'POST',
    types: Object.keys(ADD_TO_WISHLIST_KEYS),
    body: {
      data: product_id
    }
  })

export enum DELETE_PRODUCT_FROM_WISHLIST_KEYS {
  DELETE_PRODUCT_FROM_WISHLIST_REQ = 'DELETE_PRODUCT_FROM_WISHLIST_REQ',
  DELETE_PRODUCT_FROM_WISHLIST_SUCCESS = 'DELETE_PRODUCT_FROM_WISHLIST_SUCCESS',
  DELETE_PRODUCT_FROM_WISHLIST_FAILURE = 'DELETE_PRODUCT_FROM_WISHLIST_FAILURE',
}

export const deleteProductFromWishList = (product_id: IProductIDReq) => (
  dispatch: Dispatch
): Promise<any> =>
  dispatchApi(dispatch, {
    endpoint: '/users/action/deleteFromWishList.php',
    method: 'POST',
    types: Object.keys(DELETE_PRODUCT_FROM_WISHLIST_KEYS),
    body: {
      data: product_id
    }
  })


export enum COMMENT_KEYS {
  COMMENT_REQ = 'COMMENT_REQ',
  COMMENT_SUCCESS = 'COMMENT_SUCCESS',
  COMMENT_FAILURE = 'COMMENT_FAILURE',
}

export const comment = (review: IProductReviewReq) => (
  dispatch: Dispatch
): Promise<any> =>
  dispatchApi(dispatch, {
    endpoint: '/products/action/addReview.php',
    method: 'POST',
    types: Object.keys(COMMENT_KEYS),
    body: {
      data: review
    }
  })

export enum MAKE_ORDER_KEYS {
  MAKE_ORDER_REQ = 'MAKE_ORDER_REQ',
  MAKE_ORDER_SUCCESS = 'MAKE_ORDER_SUCCESS',
  MAKE_ORDER_FAILURE = 'MAKE_ORDER_FAILURE',
}

export const makeOrder = () => (
  dispatch: Dispatch
): Promise<any> =>
  dispatchApi(dispatch, {
    endpoint: '/cart/action/makeOrder.php',
    method: 'POST',
    types: Object.keys(MAKE_ORDER_KEYS),
    body: {}
  })

export enum CHECKOUT_KEYS {
  CHECKOUT_REQ = 'CHECKOUT_REQ',
  CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS',
  CHECKOUT_FAILURE = 'CHECKOUT_FAILURE',
}

export const thanhtoan = (checkoutReq : checkoutReq) => (
  dispatch: Dispatch
): Promise<any> =>
  dispatchApi(dispatch, {
    endpoint: '/cart/action/checkout.php',
    method: 'POST',
    types: Object.keys(CHECKOUT_KEYS),
    body: {
      data: checkoutReq
    }
  })

export enum GET_ALL_USER_KEYS {
  GET_ALL_USER_REQ = 'GET_ALL_USER_REQ',
  GET_ALL_USER_SUCCESS = 'GET_ALL_USER_SUCCESS',
  GET_ALL_USER_FAILURE = 'GET_ALL_USER_FAILURE',
}

export const getAllUser = () => (
  dispatch: Dispatch
): Promise<any> =>
  dispatchApi(dispatch, {
    endpoint: '/admin/users/action/static/getAll.php',
    method: 'POST',
    types: Object.keys(GET_ALL_USER_KEYS),
    body: {}
  })

export enum BLOCK_USER_KEYS {
  BLOCK_USER_REQ = 'BLOCK_USER_REQ',
  BLOCK_USER_SUCCESS = 'BLOCK_USER_SUCCESS',
  BLOCK_USER_FAILURE = 'BLOCK_USER_FAILURE',
}

export const blockUser = (user_id: blockUserReq) => (
  dispatch: Dispatch
): Promise<any> =>
  dispatchApi(dispatch, {
    endpoint: '/admin/users/action/blockUser.php',
    method: 'POST',
    types: Object.keys(BLOCK_USER_KEYS),
    body: {
      data: user_id
    }
  })

export enum UNBLOCK_USER_KEYS {
  UNBLOCK_USER_REQ = 'UNBLOCK_USER_REQ',
  UNBLOCK_USER_SUCCESS = 'UNBLOCK_USER_SUCCESS',
  UNBLOCK_USER_FAILURE = 'UNBLOCK_USER_FAILURE',
}

export const unblockUser = (user_id: blockUserReq) => (
  dispatch: Dispatch
): Promise<any> =>
  dispatchApi(dispatch, {
    endpoint: '/admin/users/action/activateUser.php',
    method: 'POST',
    types: Object.keys(UNBLOCK_USER_KEYS),
    body: {
      data: user_id
    }
  })
