import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import CompareIcon from "@material-ui/icons/Compare";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { IProductIDReq } from "src/shared/type/product.type";
import { getProductToCompare } from "src/redux/action/product.action";

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

export default function AddToCompare(props: Props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleAddToCompare = async () => {
    let getProductToCompareReq: IProductIDReq = {
      product_id: props.product_id,
    };
    const result = (await dispatch(
      getProductToCompare(getProductToCompareReq)
    )) as any;
    if (result.status) {
      // window.location.reload();
    }
  };

  return (
    <Fragment>
      <Button className={classes.root} onClick={handleAddToCompare}>
        <CompareIcon />
        Thêm
      </Button>
    </Fragment>
  );
}
