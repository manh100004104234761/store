import { IProductCount, IProductDetail } from "src/shared/type/product.type";
import * as productAction from '../action/product.action'

export interface IProductState {
  page : number,
  products : IProductDetail[],
  productCount: IProductCount,
  totalPage: number
};

const initialState: IProductState = {
  page: 0,
  products: [],
  productCount: {
    count: 0
  },
  totalPage: 0
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
        totalPage: (data.count/9 + 1)
      }
    }
    default:
      return state;
  }
}
