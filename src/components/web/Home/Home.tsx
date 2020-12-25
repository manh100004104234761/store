import React, { useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "../../common/CardItem/CardItem";
import { IProductState } from "src/redux/reducer/product.reducer";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "src/redux/store/store";
import {
  getProductCount,
  getProductPerPage,
} from "src/redux/action/product.action";
import { Button } from "@material-ui/core";

export default function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const product = useSelector<StoreState, IProductState>(
    (state) => state.product
  );

  let numberPage = [];
  for (var i = 0; i < product.totalPage; i++) {
    numberPage.push(i + 1);
  }

  useEffect(() => {
    dispatch(getProductCount());
  }, [product.productCount.count]);

  useEffect(() => {
    const getProductPerPageReq = {
      num_per_page: "9",
      page: product.page.toString(),
    };
    dispatch(getProductPerPage(getProductPerPageReq));
  }, []);

  const handleLoadNextPage = (pageNum: string) => () => {
    console.log(pageNum);
    const getProductPerPageReq = {
      num_per_page: "9",
      page: pageNum,
    };
    dispatch(getProductPerPage(getProductPerPageReq));
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {product.products.map((item) => (
          <Grid item xs={12} sm={4}>
            <CardItem item={item} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.paper}>
        {numberPage.map((pageNumber) => (
          <Button
            className={classes.paper}
            onClick={handleLoadNextPage(pageNumber.toString())}
          >
            {pageNumber}
          </Button>
        ))}
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      alignItems: "center",
      color: theme.palette.text.secondary,
    },
  })
);
