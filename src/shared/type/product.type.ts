export interface Product {
  image: string;
  product_name: string;
  description: string;
}

export interface ProductDetail extends Product{
  cpu: string,
  type: string,
  cpuNumber : number,
  maxSpeedProcess: string,
  sizeScreen: string,
}

