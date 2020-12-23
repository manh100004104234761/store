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
      const isLoggedIn = !!(action.payload && action.payload.results);
      if (isLoggedIn) {
        const { results } = action.payload;
        const { token } = results;
        localStore.setItem(BOOK_TOKEN_KEY, token);
        return {
          ...state,
          isLoggedIn,
          authToken: token,
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
      const { results } = action.payload as GetUserInfoRes;
      const user = results.user_profile;
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
