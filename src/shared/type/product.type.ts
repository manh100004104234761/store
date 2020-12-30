export interface IReview {
  image: any;
  username: string;
  content: string;
}

export interface IProductDetail {
  product_id: string;
  image: any;
  product_name: string;
  description: string;
  price: string;
  brand?: string;
  size?: string;
  color?: number;
  resolution?: string;
  ram?: string;
  cpu?: string;
  weight?: string;
  review?: IReview[]
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
