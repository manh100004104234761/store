import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

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

//To do: Add logic add to cart

export default function AddToCart() {
  const classes = useStyles();

  return (
    <Fragment>
      <Button className={classes.root}>
        <ShoppingCartIcon />
        Thêm
      </Button>
    </Fragment>
  );
}
