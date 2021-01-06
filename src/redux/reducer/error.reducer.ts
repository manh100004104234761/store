import { AnyAction } from 'redux';
import { ErrorKeys } from '../action/error.action';

export interface IErrorState {
  error: null | { messages: string; infoMessage: Array<any> };
}

const initial = {
  error: null,
};

export default function errorReducer(
  state: IErrorState = initial,
  action: AnyAction
): IErrorState {
  switch (action.type) {
    case ErrorKeys.SET_ERROR: {

      return { error: action.payload };
    }
    case ErrorKeys.CLEAR_ERROR: {
      return { error: null };
    }
    default:
      return state;
  }
}
