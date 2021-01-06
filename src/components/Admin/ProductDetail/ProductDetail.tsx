import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@material-ui/core";
import Title from "../../common/Title/Title";
import {
  IProductDetail,
  IProductIDReq,
  IProductDetailRes,
} from "src/shared/type/product.type";
import { useDispatch } from "react-redux";
import { getProductDetail } from "src/redux/action/product.action";
import { comment } from "src/redux/action/user.action";

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

export default function ProductDetail(props: Props) {
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
    console.log("Ec");
    return <div />;
  }
  return (
    <>
      <div style={{ display: "flex" }}>
        <Title title="Chi tiết sản phẩm" subTitle="Chi tiết sản phẩm" />
        <div style={{ marginLeft: 220 }}>
          <Title title="Thông số" />
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: 50 }}>
          <div>
            <CardMedia image={product.image} title="Contemplative Reptile" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {product.product_name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {product.description}
              </Typography>
              <div>
                <Typography variant="body2" color="textSecondary" component="p">
                  Giá
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.price}
                </Typography>
              </div>
              <div>
                <Typography variant="body2" color="textSecondary" component="p">
                  Số lượng
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.qty}
                </Typography>
              </div>
            </CardContent>
          </div>
          <div style={{ marginBottom: 150 }}>
            {product.values &&
              product.values.map((value) => (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h3>{value.name}:</h3>
                  <h2>{value.value}</h2>
                </div>
              ))}
          </div>
          <div>
            <div>Bình luận</div>
            {product.review?.map((ireview) => (
              <div>
                <h3>{ireview.username}</h3>
                <h2>{ireview.content}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
