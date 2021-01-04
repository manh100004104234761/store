import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { IProductIDReq } from "src/shared/type/product.type";
import {
  addProductToWishList,
  getWishList,
} from "src/redux/action/user.action";
import { IGetWishlistDetailRes } from "src/shared/type/wishlist.type";

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

export default function AddToFavorite(props: Props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  // get UserState from useReducer
  const handleAddToCart = async () => {
    let addToWishListReq: IProductIDReq = {
      product_id: props.product_id,
    };
    const result = ((await dispatch(
      addProductToWishList(addToWishListReq)
    )) as any) as IGetWishlistDetailRes;
    if (result.status) {
      const result2 = (await dispatch(getWishList())) as any;
      if (result2.status) {
        console.log("ok");
      }
    }
  };

  return (
    <Fragment>
      <Button className={classes.root} onClick={handleAddToCart}>
        <FavoriteIcon />
        Thêm
      </Button>
    </Fragment>
  );
}
