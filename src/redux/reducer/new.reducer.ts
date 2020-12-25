import { INew } from '../../shared/type/new.type';
import * as newAction from '../action/new.action'

export interface INewState {
  news: INew[]
};

const initialState: INewState = {
  news: []
};

export default function newReducer(
  state: INewState = initialState,
  action: any
): INewState {
  switch (action.type) {
    case newAction.GETALLNEWS_KEYS.GETALLNEWS_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        news: data
      };
    }
    default:
      return state;
  }
}
