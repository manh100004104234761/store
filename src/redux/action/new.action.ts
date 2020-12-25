import dispatchApi from './dispatchApi';
import { Dispatch } from 'redux';
import { INewRes } from 'src/shared/type/new.type';

export enum GETALLNEWS_KEYS {
  GETALLNEWS_REQ = 'GETALLNEWS_REQ',
  GETALLNEWS_SUCCESS = 'GETALLNEWS_SUCCESS',
  GETALLNEWS_FAILURE = 'GETALLNEWS_FAILURE',
}

export const getAllNews = () => (
  dispatch: Dispatch
) : Promise<INewRes> =>
  dispatchApi(dispatch, {
    endpoint: '/admin/news/action/getAllNews.php',
    method: 'post',
    types: Object.keys(GETALLNEWS_KEYS),
    body: {}
  });
