import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "../../common/CardItem/CardItem";
import { useDispatch, useSelector } from "react-redux";
import {
  searchProductByCategory,
  searchProductByName,
} from "src/redux/action/product.action";
import {
  IProductDetail,
  IProductPerPageRes,
  searchProductByCategoryReq,
  searchProductByNameReq,
} from "src/shared/type/product.type";

interface Props {
  match: any;
}

export default function Category(props: Props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [listProduct, setListProduct] = useState<IProductDetail[]>(
    [] as IProductDetail[]
  );

  const categoryId = props.match.params.categoryId;

  useEffect(() => {
    (async () => {
      try {
        let searchReq: searchProductByCategoryReq = {
          category_id: categoryId,
        };
        const result = ((await dispatch(
          searchProductByCategory(searchReq)
        )) as any) as IProductPerPageRes;
        if (Boolean(result)) {
          setListProduct(result.data);
        }
      } catch (err) {}
    })();
  }, [categoryId]);

  if (Object.values(listProduct).length === 0) {
    return <div />;
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {listProduct.map((item) => (
          <Grid item xs={12} sm={4}>
            <CardItem item={item} />
          </Grid>
        ))}
      </Grid>
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
