import jwtDecode from 'jwt-decode';
import { BOOK_TOKEN_KEY, localStore } from 'src/lib/storage';
import { ITokenDecode } from 'src/shared/type/user.type';

export const isAuthenticated = () => {
  try {
    const token = localStore.getItem(BOOK_TOKEN_KEY);
    if (token) {
      const infoToken = jwtDecode(token) as ITokenDecode;
      return infoToken.exp > Date.now() / 1000;
    }
  } catch (error) {
    return false;
  }
  return false;
};

export const isCustomer = () => {};

export const isAdmin = () => {};
