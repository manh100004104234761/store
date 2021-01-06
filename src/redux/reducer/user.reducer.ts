import jwtDecode from 'jwt-decode';
import { ICartInfo, ICartItem, IGetCartDetailRes, IGetOrders } from 'src/shared/type/cart.type';
import { IGetWishlistDetailRes, IWishlistItem } from 'src/shared/type/wishlist.type';
import { BOOK_TOKEN_KEY, localStore } from '../../lib/storage';
import { ITokenDecode, GetUserInfoRes, IUser } from '../../shared/type/user.type';
import * as userAction from '../action/user.action';

export interface IUserState {
  authToken: string;
  isLoggedIn: boolean;
  user?: IUser;
  loadedInfo: boolean;
  cart: ICartItem[];
  cartId: string;
  cartTotal: string;
  wishList: IWishlistItem[];
  orders: ICartInfo[]
}

const initialState: IUserState = {
  authToken: '',
  isLoggedIn: false,
  loadedInfo: false,
  cart: [],
  cartId: '',
  cartTotal: '',
  wishList: [],
  orders: []
};

export default function userReducer(
  state: IUserState = initialState,
  action: any
): IUserState {
  switch (action.type) {
    case userAction.REGISTER_KEYS.REGISTER_SUCCESS: {
      return {
        ...state
      }
    }
    case userAction.LOGIN_KEYS.LOGIN_SUCCESS: {
      if (action.payload.status) {
        const { data } = action.payload;
        const { jwt } = data;
        localStore.setItem(BOOK_TOKEN_KEY, jwt);
        return {
          ...state,
          isLoggedIn: action.payload.status,
          authToken: jwt,
        };
      }
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    case userAction.LOGIN_ADMIN_KEYS.LOGIN_ADMIN_SUCCESS: {
      if (action.payload.status) {
        const { data } = action.payload;
        const { jwt } = data;
        localStore.setItem(BOOK_TOKEN_KEY, jwt);
        //Tra ve state (tat ca), ben duoi la ghi de len
        return {
          ...state,
          isLoggedIn: action.payload.status,
          authToken: jwt,
        };
      }
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    case userAction.PERSIST_TOKEN_TO_STORE_KEYS
    .PERSIST_TOKEN_TO_STORE_SUCCESS: {
      let token = localStore.getItem(BOOK_TOKEN_KEY);
      if (token) {
        let isLoggedIn = false;
        let loadedInfo = false;
        // try {
        const infoToken = jwtDecode(token) as ITokenDecode;
        isLoggedIn = infoToken.exp > Date.now() / 1000;
        loadedInfo = true;
        // }
        // catch {
        //   localStore.removeItem(BOOK_TOKEN_KEY);
        //   token = ''
        // }
        return { ...state, isLoggedIn, authToken: token, loadedInfo };
      }
      return state;
    }
    case userAction.GET_USER_INFO_KEYS.GET_USER_INFO_SUCCESS: {
      const { data } = action.payload as GetUserInfoRes;
      const user = data;
      return {
        ...state,
        user,
      };
    }
    case userAction.UPDATE_USER_INFO_KEYS.UPDATE_USER_INFO_SUCCESS: {
      const isLoggedIn = action.payload.status;
      if (isLoggedIn) {
        const { data } = action.payload;
        const { jwt } = data;
        localStore.removeItem(BOOK_TOKEN_KEY);
        localStore.setItem(BOOK_TOKEN_KEY, jwt);
        //Tra ve state (tat ca), ben duoi la ghi de len
        return {
          ...state,
          isLoggedIn,
          authToken: jwt,
        };
      }
      return {
        ...state,
        isLoggedIn,
      };
    }
    case userAction.LOGOUT_KEYS.LOGOUT_SUCCESS: {
      localStore.removeItem(BOOK_TOKEN_KEY);
      return initialState;
    }
    case userAction.GET_CART_DETAIL_KEYS.GET_CART_DETAIL_SUCCESS: {
      const { data } = action.payload as IGetCartDetailRes;
      const { items } = data;
      return {
        ...state,
        cart: items,
        cartId: data.cart_id,
        cartTotal: data.total
      }
    }
    case userAction.ADD_TO_CART_KEYS.ADD_TO_CART_SUCCESS: {
      return {
        ...state
      }
    }
    case userAction.GET_WISHLIST_KEYS.GET_WISHLIST_SUCCESS: {
      const { data } = action.payload as IGetWishlistDetailRes;
      return{
        ...state,
        wishList: data,
      }
    }
    case userAction.GET_WISHLIST_KEYS.GET_WISHLIST_SUCCESS: {
     return {
       ...state
     }
    }
    case userAction.CHECKOUT_KEYS.CHECKOUT_SUCCESS: {
      return {
        ...state,
        cart: [],
        cartId: "",
        cartTotal: "",
      }
    }
    case userAction.GET_ODERS_KEYS.GET_ODERS_SUCCESS: {
      const { data } = action.payload as IGetOrders;
      return {
        ...state,
        orders: data,
      }
    }
    default:
      return state;
  }
}
