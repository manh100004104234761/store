import { IProductCount, IProductDetail } from "src/shared/type/product.type";
import * as productAction from '../action/product.action'

export interface IProductState {
  page : number,
  products : IProductDetail[],
  productCount: IProductCount,
  totalPage: number,
  isLoadedCategory: boolean
};

const initialState: IProductState = {
  page: 1,
  products: [],
  productCount: {
    count: 0
  },
  totalPage: 0,
  isLoadedCategory: false
};

export default function productReducer(
  state: IProductState = initialState,
  action: any
): IProductState{
  switch(action.type){
    case productAction.GETPRODUCTCOUNT_KEY.GETPRODUCTCOUNT_SUCCESS:{
      const { data } = action.payload;
      return {
        ...state,
        productCount: data,
        totalPage: (data.count/9)
      }
    }
    case productAction.GETPRODUCTSPERPAGE_KEY.GETPRODUCTSPERPAGE_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        products: data
      }
    }
    case productAction.GETPRODUCTDETAIL_KEY.GETPRODUCTDETAIL_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        products: data
      }
    }
    case productAction.GETALLCATEGORY_KEY.GETALLCATEGORY_SUCCESS: {
      const { status } = action.payload;
      return {
        ...state,
        isLoadedCategory: status
      }
    }
    case productAction.SEARCH_PRODUCT_BY_NAME_KEY.SEARCH_PRODUCT_BY_NAME_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        products: data
      }
    }
    default:
      return state;
  }
}
