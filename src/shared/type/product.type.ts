export interface IReview {
  image: any;
  username: string;
  content: string;
}

export interface Properti {
  attribute_id: string;
  name: string;
  value: string;
  attribute_value_id: string;
  product_id: string;
}

export interface IProductDetail {
  product_id: string;
  attribute_set_id?: string;
  image: any;
  product_name: string;
  description: string;
  qty?: string;
  selled?: string;
  created_at?: string;
  updated_at?: string;
  price: string;
  review?: IReview[]
  values?: Properti[]
}

export interface IProductCount {
  count: number
}

export interface IProductCountRes {
  status: boolean;
  message: string;
  data: IProductCount
}

export interface IProductPerPageRes {
  status: boolean;
  message: string;
  data: IProductDetail[]
}

export interface IProductPerPageReq {
  num_per_page: string;
  page: string;
}


export interface IProductIDReq {
  product_id : string;
}

export interface IProductReviewReq {
  product_id : string;
  content: string;
}


export interface IProductDetailRes {
  status: boolean;
  message: string;
  data: IProductDetail
}

export interface ICategory {
  category_id: string;
  name: string;
  parentId: string
}

export interface IGetAllCategoryRes {
  status: boolean;
  message: string;
  data: ICategory[]
}

export interface searchProductByNameReq {
  product_name: string;
}

export interface searchProductByCategoryReq {
  category_id: string;
}

