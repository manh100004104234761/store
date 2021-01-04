import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import { getDisplayCurrency } from "../../../shared/ultis/intl.utils";
import Title from "../../common/Title/Title";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { StoreState } from "src/redux/store/store";
import { IUserState } from "src/redux/reducer/user.reducer";
import { ICartInfo, ICartItem } from "src/shared/type/cart.type";

const useStyles = makeStyles({
  table: {},
  imgStyle: {
    height: 200,
    width: 150,
  },
  nameContainer: {
    display: "flex",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
    textAlign: "end",
  },
  infoUserContainer: {
    display: "flex",
    alignItems: "center",
  },
  marginTopCommon: {
    marginTop: 24,
  },
  addressForm: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  buttonPlace: {
    backgroundColor: "#ee4d2d",
    color: "white",
  },
});

interface Props {}

// TODO: Convert to map => define Item type
const HistoryOrder = (props: Props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector<StoreState, IUserState>((state) => state.user);

  const classes = useStyles();

  const handleCheckout = (order: ICartInfo) => () => {
    let cartInfo: ICartItem[] = order.items;
    let cartTotal: string = order.total;
    let status: string = order.status;
    if (status === "1") {
      history.push("/cart");
    } else {
      history.push(`/checkout/${order.cart_id}`, {
        cartInfo,
        cartTotal,
        status,
      });
    }
  };

  return (
    <div>
      <Title title="Quản lý đơn hàng" subTitle="Quản lý đơn hàng của bạn" />
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">Đơn hàng</TableCell>
              <TableCell align="center" style={{ width: "15%" }}>
                Số lượng
              </TableCell>
              <TableCell align="center" style={{ width: "15%" }}>
                Thành tiền
              </TableCell>
              <TableCell align="center" style={{ width: "15%" }}>
                Trạng thái
              </TableCell>
              <TableCell align="center" style={{ width: "15%" }}>
                Thao tác
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.orders.map((order) => (
              <TableRow>
                <TableCell align="center">
                  <Typography style={{ marginLeft: 12 }}>
                    {order.cart_id}
                  </Typography>
                </TableCell>
                <TableCell align="center" style={{ width: "15%" }}>
                  <Typography>{order.items_qty}</Typography>
                </TableCell>
                <TableCell align="center" style={{ width: "15%" }}>
                  {getDisplayCurrency(Number(order.total))}
                </TableCell>
                <TableCell align="center" style={{ width: "15%" }}>
                  {order.status === "1" && "Chưa order"}
                  {order.status === "2" && "Chưa thanh toán"}
                  {order.status === "0" && "Đã thanh toán"}
                </TableCell>
                <TableCell align="center" style={{ width: "15%" }}>
                  <Button onClick={handleCheckout(order)}>Kiểm tra</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default HistoryOrder;
