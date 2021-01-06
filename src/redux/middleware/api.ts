import axios, { Method, AxiosResponse, AxiosRequestConfig } from 'axios';
import { Middleware, AnyAction } from 'redux';
import { IApiAction } from '../action/dispatchApi';
import { ErrorKeys } from '../action/error.action';
import { LoadingKeys } from '../action/loading.action';

export const CALL_API = 'CALL_API';
const API_BASE_URL = 'http://localhost/project3Api/api/';

const callApi = async <R>(
  endpoint: string,
  method: Method,
  authToken: string,
  body?: AxiosRequestConfig
): Promise<AxiosResponse<R>> => {
  let url = endpoint;
  return await axios.request({
    baseURL: API_BASE_URL,
    url,
    method,
    headers: { Authorization: authToken ? `${authToken}` : '' },
    ...body,
  });
};

const apiMiddleware: Middleware = store => next => async <R>(
  action: AnyAction
): Promise<R | null | { error: any }> => {
  if (!action[CALL_API]) {
    next(action);
    return null;
  }
  const { authToken } = store.getState().user || {};
  const [, reqSuccess] = action[CALL_API].types;

  // TODO: Loading when fetch data
  next({ type: LoadingKeys.SET_LOADING });
  // TODO: Fetch data
  const { endpoint, method, body } = (action as IApiAction)[CALL_API];
  try {
    const response = (await callApi(
      endpoint,
      method,
      authToken,
      body
    )) as AxiosResponse;
    next({
      type: reqSuccess,
      payload: response.data,
    });
    next({ type: LoadingKeys.REMOVE_LOADING });
    return response.data as R;
  } catch (error) {
    return null;
  }
};

export default apiMiddleware;
