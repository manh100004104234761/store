import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@material-ui/core";
import Title from "../../common/Title/Title";
import {
  IProductDetail,
  IProductIDReq,
  IProductDetailRes,
} from "src/shared/type/product.type";
import { useDispatch } from "react-redux";
import { getProductDetail } from "src/redux/action/product.action";
import { useLocation } from "react-router-dom";
import { IOrder } from "src/shared/type/order.type";

interface Props {
  match: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      marginLeft: 40,
    },
  })
);

interface IOrderDetail {
  orderDetail: IOrder;
}

export default function OrderDetail(props: Props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const { orderDetail } = location.state as IOrderDetail;

  const orderId = props.match.params.orderId;
  console.log(location);

  return (
    <>
      <div style={{ display: "flex" }}>
        <Title title="Chi tiết đơn hàng" subTitle="Chi tiết đơn hàng" />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: 50 }}>
          <div>
            <div>
              <div>Cart ID</div>
              <div>{orderDetail.cart_id}</div>
            </div>
            <div>
              <div>User ID</div>
              <div>{orderDetail.user_id}</div>
            </div>
            <div>
              <div>Create at</div>
              <div>{orderDetail.created_at}</div>
            </div>
            <div>
              <div>Update at</div>
              <div>{orderDetail.updated_at}</div>
            </div>
            <div>
              <div>Cart ID</div>
              <div>{orderDetail.cart_id}</div>
            </div>
            <div>
              <div>Status</div>
              <div>{orderDetail.status}</div>
            </div>
            <div>
              <div>Number of product</div>
              <div>{orderDetail.items_qty}</div>
            </div>
            <div>
              <div>Product count</div>
              <div>{orderDetail.items_count}</div>
            </div>
            <div>
              <div>Customer Email</div>
              <div>{orderDetail.customer_email}</div>
            </div>
            <div>
              <div>Customer First Name</div>
              <div>{orderDetail.customer_first_name}</div>
            </div>
            <div>
              <div>Customer Last Name</div>
              <div>{orderDetail.customer_last_name}</div>
            </div>
          </div>
          <div style={{ marginBottom: 150 }}>
            {orderDetail.items &&
              orderDetail.items.map((item) => (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h3>{item.product_name}:</h3>
                  <h2>{item.price}</h2>
                  <h2>{item.qty}</h2>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
