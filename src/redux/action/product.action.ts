import dispatchApi from './dispatchApi';
import { Dispatch } from 'redux';
import { IProductCountRes, IProductIDReq, IProductPerPageReq, IProductPerPageRes, searchProductByCategoryReq, searchProductByNameReq } from 'src/shared/type/product.type';

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


export const getProductDetail = (product_id : IProductIDReq) => (
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
  types: Object.keys(SEARCH_PRODUCT_BY_NAME_KEY),
  body: {
    data: productName
  }
})

export enum SEARCH_PRODUCT_BY_CATEGORY_KEY{
  SEARCH_PRODUCT_BY_CATEGORY_REQ = 'SEARCH_PRODUCT_BY_CATEGORY_REQ',
  SEARCH_PRODUCT_BY_CATEGORY_SUCCESS = 'SEARCH_PRODUCT_BY_CATEGORY_SUCCESS',
  SEARCH_PRODUCT_BY_CATEGORY_FAILURE = 'SEARCH_PRODUCT_BY_CATEGORY_FAILURE',
}


export const searchProductByCategory = (productCategory: searchProductByCategoryReq) => (
  dispatch: Dispatch
) : Promise<IProductPerPageRes> => dispatchApi(dispatch, {
  endpoint: '/products/action/getProductByCategoryId.php',
  method: 'POST',
  types: Object.keys(SEARCH_PRODUCT_BY_CATEGORY_KEY),
  body: {
    data: productCategory
  }
})

export enum GETPRODUCT_TO_COMPARE_KEY{
  GETPRODUCT_TO_COMPARE_REQ = 'GETPRODUCT_TO_COMPARE_REQ',
  GETPRODUCT_TO_COMPARE_SUCCESS = 'GETPRODUCT_TO_COMPARE_SUCCESS',
  GETPRODUCT_TO_COMPARE_FAILURE = 'GETPRODUCT_TO_COMPARE_FAILURE',
}


export const getProductToCompare = (product_id : IProductIDReq) => (
  dispatch: Dispatch
) : Promise<IProductPerPageRes> => dispatchApi(dispatch, {
  endpoint: '/products/index.php',
  method: 'POST',
  types: Object.keys(GETPRODUCT_TO_COMPARE_KEY),
  body: {
    data: product_id,
  }
})


export enum GET_ALL_PRODUCTS_KEY{
  GET_ALL_PRODUCTS_REQ = 'GET_ALL_PRODUCTS_REQ',
  GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS',
  GET_ALL_PRODUCTS_FAILURE = 'GET_ALL_PRODUCTS_FAILURE',
}


export const getAllProduct = () => (
  dispatch: Dispatch
) : Promise<IProductPerPageRes> => dispatchApi(dispatch, {
  endpoint: '/admin/products/action/getAll.php',
  method: 'POST',
  types: Object.keys(GET_ALL_PRODUCTS_KEY),
  body: {}
})
