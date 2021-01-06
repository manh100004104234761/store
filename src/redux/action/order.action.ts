import dispatchApi from './dispatchApi';
import { Dispatch } from 'redux';
import { checkoutAdminReq, GetAllOrdersRes } from 'src/shared/type/order.type';
import { checkoutReq } from 'src/shared/type/cart.type';


export enum GET_ALL_ORDERS_KEYS {
  GET_ALL_ORDERS_REQ = 'GET_ALL_ORDERS_REQ',
  GET_ALL_ORDERS_SUCCESS = 'GET_ALL_ORDERS_SUCCESS',
  GET_ALL_ORDERS_FAILURE = 'GET_ALL_ORDERS_FAILURE',
}

export const getAllOrders = () => (
  dispatch: Dispatch
) : Promise<GetAllOrdersRes> =>
  dispatchApi(dispatch, {
    endpoint: '/admin/cart/action/getAll.php',
    method: 'post',
    types: Object.keys(GET_ALL_ORDERS_KEYS),
    body: {}
  });


export enum CHECKOUT_KEYS {
  CHECKOUT_REQ = 'CHECKOUT_REQ',
  CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS',
  CHECKOUT_FAILURE = 'CHECKOUT_FAILURE',
}

export const checkout = (checkoutReq: checkoutAdminReq) => (
  dispatch: Dispatch
) : Promise<any> =>
  dispatchApi(dispatch, {
    endpoint: '/admin/cart/action/checkout.php',
    method: 'post',
    types: Object.keys(CHECKOUT_KEYS),
    body: {
      data: checkoutReq
    }
  });


export enum CANCEL_KEYS {
  CANCEL_REQ = 'CANCEL_REQ',
  CANCEL_SUCCESS = 'CANCEL_SUCCESS',
  CANCEL_FAILURE = 'CANCEL_FAILURE',
}

export const cancel = (cancelReq: checkoutAdminReq) => (
  dispatch: Dispatch
) : Promise<any> =>
  dispatchApi(dispatch, {
    endpoint: '/admin/cart/action/cancel.php',
    method: 'post',
    types: Object.keys(CANCEL_KEYS),
    body: {
      data: cancelReq
    }
  });
