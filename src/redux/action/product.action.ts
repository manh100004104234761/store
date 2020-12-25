import dispatchApi from './dispatchApi';
import { Dispatch } from 'redux';
import { IProductCountRes, IProductPerPageReq, IProductPerPageRes } from 'src/shared/type/product.type';

export enum GETPRODUCTCOUNT_KEY{
  GETPRODUCTCOUNT_REQ = 'GETPRODUCTCOUNT_REQ',
  GETPRODUCTCOUNT_SUCCESS = 'GETPRODUCTCOUNT_SUCCESS',
  GETPRODUCTCOUNT_FAILURE = 'GETPRODUCTCOUNT_FAILURE',
}

export const getProductCount = () => (
  dispatch: Dispatch
) : Promise<IProductCountRes> => dispatchApi(dispatch, {
  endpoint: '/products/action/countAllProduct.php',
  method: 'GET',
  types: Object.keys(GETPRODUCTCOUNT_KEY),
  body: {}
})

export enum GETPRODUCTSPERPAGE_KEY{
  GETPRODUCTSPERPAGE_REQ = 'GETPRODUCTSPERPAGE_REQ',
  GETPRODUCTSPERPAGE_SUCCESS = 'GETPRODUCTSPERPAGE_SUCCESS',
  GETPRODUCTSPERPAGE_FAILURE = 'GETPRODUCTSPERPAGE_FAILURE',
}


export const getProductPerPage = (page : IProductPerPageReq) => (
  dispatch: Dispatch
) : Promise<IProductPerPageRes> => dispatchApi(dispatch, {
  endpoint: '/products/action/getLatest.php',
  // method = GET thi khong co body dau bro,
  method: 'post',
  types: Object.keys(GETPRODUCTSPERPAGE_KEY),
  body: {
    data: page,
  }
})
