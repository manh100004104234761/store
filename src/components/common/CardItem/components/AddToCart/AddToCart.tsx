import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "src/redux/store/store";
import { IUserState } from "src/redux/reducer/user.reducer";
import { IProductDetailReq } from "src/shared/type/product.type";
import { addProductToCart } from "src/redux/action/user.action";
import { IGetCartDetailRes } from "src/shared/type/cart.type";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 70,
      border: "none",
      borderRadius: 30,
      height: 30,
      backgroundColor: "#43ABC9",
      outline: "none",
      color: "#fff",
      fontSize: 12,
      marginRight: 10,
      marginLeft: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textTransform: "none",
    },
  })
);

interface Props {
  product_id: string;
}

//To do: Add logic add to cart

export default function AddToCart(props: Props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  // get UserState from useReducer
  const handleAddToCart = async () => {
    let addToCartReq: IProductDetailReq = {
      product_id: props.product_id,
    };
    const result = ((await dispatch(
      addProductToCart(addToCartReq)
    )) as any) as IGetCartDetailRes;
    if (result.status) {
      window.location.reload();
    }
  };

  return (
    <Fragment>
      <Button className={classes.root} onClick={handleAddToCart}>
        <ShoppingCartIcon />
        Thêm
      </Button>
    </Fragment>
  );
}
