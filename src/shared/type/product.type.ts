export interface IProductDetail {
  image: string;
  product_name: string;
  description: string;
  price: string
  brand?: string,
  size?: string,
  color?: number,
  resolution?: string,
  ram?: string,
  cpu?: string,
  weight?: string
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
