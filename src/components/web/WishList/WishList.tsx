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
import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Title from "../../common/Title/Title";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { StoreState } from "src/redux/store/store";
import { IUserState } from "src/redux/reducer/user.reducer";
import { ShoppingCart } from "@material-ui/icons";
import { IProductIDReq } from "src/shared/type/product.type";
import {
  addProductToCart,
  deleteProductFromWishList,
} from "src/redux/action/user.action";

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
const WishList = (props: Props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector<StoreState, IUserState>((state) => state.user);

  const classes = useStyles();

  const handleAddToCart = (id: string) => async () => {
    let addToCartReq: IProductIDReq = {
      product_id: id,
    };
    const result = (await dispatch(addProductToCart(addToCartReq))) as any;
    if (result.status) {
      window.location.reload();
    }
  };

  const handleDeleteFromWishlist = (id: string) => async () => {
    let deleteFromWishlistReq: IProductIDReq = {
      product_id: id,
    };
    const result = (await dispatch(
      deleteProductFromWishList(deleteFromWishlistReq)
    )) as any;
    if (result.status) {
      window.location.reload();
    }
  };

  const handleCheckout = () => {};

  return (
    <div>
      <Title title="Sản phẩm ưa thích" subTitle="Sản phẩm ưa thích của bạn" />
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
                Thao tác
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.wishList.map((item) => (
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
                  <IconButton onClick={handleAddToCart(item.product_id)}>
                    <Tooltip title="Thêm vào giỏ hàng">
                      <ShoppingCart />
                    </Tooltip>
                  </IconButton>
                </TableCell>
                <TableCell align="center" style={{ width: "15%" }}>
                  <IconButton
                    onClick={handleDeleteFromWishlist(item.product_id)}
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
    </div>
  );
};

export default WishList;
