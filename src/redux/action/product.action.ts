import dispatchApi from './dispatchApi';
import { Dispatch } from 'redux';
import { IProductCount } from 'src/shared/type/product.type';

export enum GETPRODUCTCOUNT_KEY{
  GETPRODUCTCOUNT_REQ = 'GETPRODUCTCOUNT_REQ',
  GETPRODUCTCOUNT_SUCCESS = 'GETPRODUCTCOUNT_SUCCESS',
  GETPRODUCTCOUNT_FAILURE = 'GETPRODUCTCOUNT_FAILURE',
}

export const getProductCount = () => (
  dispatch: Dispatch
) : Promise<IProductCount> => dispatchApi(dispatch, {
  endpoint: '/products/action/countAllProduct.php',
  method: 'GET',
  types: Object.keys(GETPRODUCTCOUNT_KEY),
  body: {}
})

