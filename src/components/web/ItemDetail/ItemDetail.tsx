import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { TextField, Typography } from "@material-ui/core";
import CardItem from "../../common/CardItem/CardItem";
import Button from "@material-ui/core/Button";
import Title from "../../common/Title/Title";
import {
  IProductDetail,
  IProductIDReq,
  IProductDetailRes,
} from "src/shared/type/product.type";
import { useDispatch } from "react-redux";
import { getProductDetail } from "src/redux/action/product.action";

interface Props {
  match: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      marginLeft: 40,
    },
  })
);

export default function ItemDetail(props: Props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [product, setproduct] = useState<IProductDetail>({} as IProductDetail);

  const productId = props.match.params.productId;
  let productDetailReq: IProductIDReq = {
    product_id: productId,
  };

  useEffect(() => {
    (async () => {
      try {
        const result = ((await dispatch(
          getProductDetail(productDetailReq)
        )) as any) as IProductDetailRes;
        if (result.status) {
          setproduct(result.data);
        }
      } catch (err) {}
    })();
  }, []);

  if (Object.values(product).length === 0) {
    return <div />;
  }
  return (
    <div>
      <Title title="Chi tiết sản phẩm" subTitle="Chi tiết sản phẩm" />
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <CardItem
            item={{
              image: product.image,
              product_name: product.product_name,
              description: product.description,
              price: product.price,
              product_id: product.product_id,
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <div>Thông số</div>
          {Object.entries(product).forEach(([key, value]) => {
            if (Array.isArray(value)) {
              return <div />;
            } else
              return (
                <div>
                  <h3>{key}</h3>
                  <h2>{value}</h2>
                </div>
              );
          })}
          <div>Bình luận</div>
          {product.review?.map((review) => (
            <div>
              <h3>review.username</h3>
              <h2>review.content</h2>
            </div>
          ))}
          <div>
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Binh luan"
            />
            <Button variant="contained">Bình luận</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
