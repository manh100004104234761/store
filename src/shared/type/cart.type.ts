export interface ICartItem {
  item_id: string;
  cart_id: string;
  created_at: string;
  updated_at: string;
  product_name: string;
  product_id: string;
  description: string;
  qty: string;
  price: string;
}

export interface IGetCartDetailRes{
  status: boolean;
  message: string;
  data: {
    cart_id: string;
    user_id: string;
    created_at: string;
    updated_at: string;
    status: string;
    items_qty: string;
    items_count: string;
    customer_email: string;
    customer_first_name: string;
    customer_last_name: string;
    total: string;
    items: ICartItem[]
  }
}