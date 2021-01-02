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
  IconButton,
  Tooltip,
  Button,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import React, { useState } from "react";
import { getDisplayCurrency } from "../../../shared/ultis/intl.utils";
import DeleteIcon from "@material-ui/icons/Delete";
import Title from "../../common/Title/Title";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { StoreState } from "src/redux/store/store";
import { IUserState } from "src/redux/reducer/user.reducer";
import { IProductIDReq } from "src/shared/type/product.type";
import {
  addProductToCart,
  deleteProductFromCart,
  makeOrder,
  removeOneProductFromCart,
} from "src/redux/action/user.action";
import { IGetCartDetailRes } from "src/shared/type/cart.type";

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
const Cart = (props: Props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector<StoreState, IUserState>((state) => state.user);

  const handleAddToCart = (id: string) => async () => {
    let addToCartReq: IProductIDReq = {
      product_id: id,
    };
    const result = (await dispatch(addProductToCart(addToCartReq))) as any;
    if (result.status) {
      history.go(0);
    }
  };

  const handleRemoveOneProductFromCart = (id: string) => async () => {
    let removeFromCartReq: IProductIDReq = {
      product_id: id,
    };
    const result = (await dispatch(
      removeOneProductFromCart(removeFromCartReq)
    )) as any;
    if (result.status) {
      history.go(0);
    }
  };

  const handleDeleteProductFromCart = (id: string) => async () => {
    let deleteFromCartReq: IProductIDReq = {
      product_id: id,
    };
    const result = (await dispatch(
      deleteProductFromCart(deleteFromCartReq)
    )) as any;
    if (result.status) {
      history.go(0);
    }
  };

  const classes = useStyles();

  const handleMakeOrder = async () => {
    const result = (await dispatch(makeOrder())) as any;
    if (result.status) {
      history.push(`/checkout/${user.cartId}`);
    }
  };

  return (
    <div>
      <Title title="Thanh toán" subTitle="Thanh toán giỏ hàng của bạn" />
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">Sản phẩm</TableCell>
              <TableCell align="center" style={{ width: "15%" }}>
                Đơn giá
              </TableCell>
              <TableCell align="center" style={{ width: "15%" }}>
                Số lượng
              </TableCell>
              <TableCell align="center" style={{ width: "15%" }}>
                Thành tiền
              </TableCell>
              <TableCell align="center" style={{ width: "15%" }}>
                Thao tác
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.cart.map((item) => (
              <TableRow>
                <TableCell align="center" className={classes.nameContainer}>
                  <img
                    className={classes.imgStyle}
                    src={`${process.env.PUBLIC_URL}/images/harrypotter.jpg`}
                  />
                  <Typography style={{ marginLeft: 12 }}>
                    {item.product_name}
                  </Typography>
                </TableCell>
                <TableCell align="center" style={{ width: "15%" }}>
                  {getDisplayCurrency(Number(item.price))}
                </TableCell>
                <TableCell align="center" style={{ width: "15%" }}>
                  <IconButton onClick={handleAddToCart(item.product_id)}>
                    <AddIcon />
                  </IconButton>
                  <Typography>{item.qty}</Typography>
                  <IconButton>
                    <RemoveIcon
                      onClick={handleRemoveOneProductFromCart(item.product_id)}
                    />
                  </IconButton>
                </TableCell>
                <TableCell align="center" style={{ width: "15%" }}>
                  {getDisplayCurrency(Number(item.price) * Number(item.qty))}
                </TableCell>
                <TableCell align="center" style={{ width: "15%" }}>
                  <IconButton
                    onClick={handleDeleteProductFromCart(item.product_id)}
                  >
                    <Tooltip title="Xóa sản phẩm">
                      <DeleteIcon />
                    </Tooltip>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className={classes.buttonContainer}>
        <Button
          variant="outlined"
          className={classes.buttonPlace}
          color="inherit"
          onClick={handleMakeOrder}
        >
          Đặt hàng
        </Button>
      </div>
    </div>
  );
};

export default Cart;
