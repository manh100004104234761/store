import jwtDecode from 'jwt-decode';
import { ICartItem, IGetCartDetailRes } from 'src/shared/type/cart.type';
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
  wishList: IWishlistItem[];
}

const initialState: IUserState = {
  authToken: '',
  isLoggedIn: false,
  loadedInfo: false,
  cart: [],
  cartId: '',
  wishList: [],
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
      const isLoggedIn = !!(action.payload && action.payload.data);
      if (isLoggedIn) {
        const { data } = action.payload;
        const { jwt } = data;
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
    case userAction.PERSIST_TOKEN_TO_STORE_KEYS
    .PERSIST_TOKEN_TO_STORE_SUCCESS: {
      const token = localStore.getItem(BOOK_TOKEN_KEY);
      if (token) {
        const infoToken = jwtDecode(token) as ITokenDecode;
        const isLoggedIn = infoToken.exp > Date.now() / 1000;
        return { ...state, isLoggedIn, authToken: token, loadedInfo: true };
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
      const isLoggedIn = !!(action.payload && action.payload.data);
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
        cartId: data.cart_id
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
    default:
      return state;
  }
}
