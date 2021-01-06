import { IOrder } from 'src/shared/type/order.type';
import * as orderAction from '../action/order.action'

export interface IOrdersState {
  orders: IOrder[]
};

const initialState: IOrdersState = {
  orders: []
};

export default function newReducer(
  state: IOrdersState = initialState,
  action: any
): IOrdersState {
  switch (action.type) {
    case orderAction.GET_ALL_ORDERS_KEYS.GET_ALL_ORDERS_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        orders: data
      };
    }
    default:
      return state;
  }
}
