import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { IProductIDReq, IProductDetailRes } from "src/shared/type/product.type";
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

export default function Detail(props: Props) {
  const classes = useStyles();
  const history = useHistory();

  // get UserState from useReducer
  const handleDetail = async () => {
    history.push(`/product-detail/${props.product_id}`);
  };

  return (
    <Fragment>
      <Button className={classes.root} onClick={handleDetail}>
        Chi tiết
      </Button>
    </Fragment>
  );
}
