import dispatchApi from './dispatchApi';
import { Dispatch } from 'redux';
import { IProductCountRes, IProductDetailReq, IProductPerPageReq, IProductPerPageRes, searchProductByNameReq } from 'src/shared/type/product.type';

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
  method: 'POST',
  types: Object.keys(GETPRODUCTSPERPAGE_KEY),
  body: {
    data: page,
  }
})


export enum GETPRODUCTDETAIL_KEY{
  GETPRODUCTDETAIL_REQ = 'GETPRODUCTDETAIL_REQ',
  GETPRODUCTDETAIL_SUCCESS = 'GETPRODUCTDETAIL_SUCCESS',
  GETPRODUCTDETAIL_FAILURE = 'GETPRODUCTDETAIL_FAILURE',
}


export const getProductDetail = (product_id : IProductDetailReq) => (
  dispatch: Dispatch
) : Promise<IProductPerPageRes> => dispatchApi(dispatch, {
  endpoint: '/products/index.php',
  method: 'POST',
  types: Object.keys(GETPRODUCTDETAIL_KEY),
  body: {
    data: product_id,
  }
})


export enum GETALLCATEGORY_KEY{
  GETALLCATEGORY_REQ = 'GETALLCATEGORY_REQ',
  GETALLCATEGORY_SUCCESS = 'GETALLCATEGORY_SUCCESS',
  GETALLCATEGORY_FAILURE = 'GETALLCATEGORY_FAILURE',
}


export const getAllCategory = () => (
  dispatch: Dispatch
) : Promise<IProductPerPageRes> => dispatchApi(dispatch, {
  endpoint: '/products/action/getAllCategory.php',
  method: 'GET',
  types: Object.keys(GETALLCATEGORY_KEY),
  body: {}
})


export enum SEARCH_PRODUCT_BY_NAME_KEY{
  SEARCH_PRODUCT_BY_NAME_REQ = 'SEARCH_PRODUCT_BY_NAME_REQ',
  SEARCH_PRODUCT_BY_NAME_SUCCESS = 'SEARCH_PRODUCT_BY_NAME_SUCCESS',
  SEARCH_PRODUCT_BY_NAME_FAILURE = 'SEARCH_PRODUCT_BY_NAME_FAILURE',
}


export const searchProductByName = (productName: searchProductByNameReq) => (
  dispatch: Dispatch
) : Promise<IProductPerPageRes> => dispatchApi(dispatch, {
  endpoint: '/products/action/searchProduct.php',
  method: 'POST',
  types: Object.keys(GETALLCATEGORY_KEY),
  body: {
    data: productName
  }
})
