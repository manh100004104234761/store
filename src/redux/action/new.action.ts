import dispatchApi from './dispatchApi';
import { Dispatch } from 'redux';
import { INewRes, newReq } from 'src/shared/type/new.type';

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

export enum UPDATE_NEWS_KEYS {
  UPDATE_NEWS_REQ = 'UPDATE_NEWS_REQ',
  UPDATE_NEWS_SUCCESS = 'UPDATE_NEWS_SUCCESS',
  UPDATE_NEWS_FAILURE = 'UPDATE_NEWS_FAILURE',
}

export const editNew = (newNew: newReq) => (
  dispatch: Dispatch
) : Promise<any> =>
  dispatchApi(dispatch, {
    endpoint: '/admin/news/index.php',
    method: 'PUT',
    types: Object.keys(UPDATE_NEWS_KEYS),
    body: {
      data: newNew
    }
  });


export enum ADD_NEW_KEYS {
  ADD_NEW_REQ = 'ADD_NEW_REQ',
  ADD_NEW_SUCCESS = 'ADD_NEW_SUCCESS',
  ADD_NEW_FAILURE = 'ADD_NEW_FAILURE',
}

export const addNew = (newNew: newReq) => (
  dispatch: Dispatch
) : Promise<any> =>
  dispatchApi(dispatch, {
    endpoint: '/admin/news/index.php',
    method: 'POST',
    types: Object.keys(ADD_NEW_KEYS),
    body: {
      data: newNew
    }
  });
