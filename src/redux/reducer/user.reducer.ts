import jwtDecode from 'jwt-decode';
import { BOOK_TOKEN_KEY, localStore } from '../../lib/storage';
import { ITokenDecode, GetUserInfoRes, IUser } from '../../shared/type/user.type';
import * as userAction from '../action/user.action';

export interface IUserState {
  authToken: string;
  isLoggedIn: boolean;
  user?: IUser;
  loadedInfo: boolean;
}

const initialState: IUserState = {
  authToken: '',
  isLoggedIn: false,
  loadedInfo: false,
};

export default function userReducer(
  state: IUserState = initialState,
  action: any
): IUserState {
  switch (action.type) {
    case userAction.REGISTER_KEYS.REGISTER_SUCCESS:
    case userAction.LOGIN_KEYS.LOGIN_SUCCESS: {
      const isLoggedIn = !!(action.payload && action.payload.result);
      if (isLoggedIn) {
        console.log(action.payload);
        const { result } = action.payload;
        const { jwt, data } = result;
        localStore.setItem(BOOK_TOKEN_KEY, jwt);
        //Tra ve state (tat ca), ben duoi la ghi de len
        return {
          ...state,
          isLoggedIn,
          authToken: jwt,
          user: data
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
      const user = data.user_profile;
      return {
        ...state,
        user,
      };
    }
    case userAction.LOGOUT_KEYS.LOGOUT_SUCCESS: {
      localStore.removeItem(BOOK_TOKEN_KEY);
      return initialState;
    }

    default:
      return state;
  }
}
