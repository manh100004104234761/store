export interface IWishlistItem {
  product_id: string;
  user_id: string;
  product_name: string;
  image: any;
}

export interface IGetWishlistDetailRes{
  status: boolean;
  message: string;
  data: IWishlistItem[]
}
