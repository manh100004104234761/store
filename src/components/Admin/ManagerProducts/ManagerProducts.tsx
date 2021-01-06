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
  Button,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Title from "../../common/Title/Title";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { StoreState } from "src/redux/store/store";
import { IUserState } from "src/redux/reducer/user.reducer";
import { IProductState } from "src/redux/reducer/product.reducer";
import { getDisplayCurrency } from "src/shared/ultis/intl.utils";
import AddProduct from "../AddProduct/AddProduct";
import { deleteProduct, getAllProduct } from "src/redux/action/product.action";
import {
  deleteProductReq,
  deleteProductRes,
  IProductDetail,
  IProductDetailRes,
} from "src/shared/type/product.type";
import EditProduct from "../EditProduct/EditProduct";

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
const ManagerProducts = (props: Props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const products = useSelector<StoreState, IProductState>(
    (state) => state.product
  );

  const [productDetail, setProductDetail] = useState({} as IProductDetail);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialog2, setOpenDialog2] = useState(false);

  const handleProductDetail = (id: string) => () => {
    history.push(`/admin/products/${id}`);
  };

  const handleEditProduct = (product: IProductDetail) => () => {
    setProductDetail(product);
    setOpenDialog2(true);
  };

  const handleDeleteProduct = (id: string) => async () => {
    let delProductReq: deleteProductReq = {
      product_id: id,
    };
    console.log(delProductReq);
    try {
      const result = ((await dispatch(
        deleteProduct(delProductReq)
      )) as any) as deleteProductRes;
      if (result.status) {
        console.log("Ok");
      }
    } catch (err) {}
  };

  const classes = useStyles();
  useEffect(() => {
    (async () => {
      try {
        const result = (await dispatch(getAllProduct())) as any;
        if (result.status) {
          console.log("ok");
        }
      } catch (err) {}
    })();
  }, []);

  return (
    <div>
      <Title title="Quản lý sản phẩm" subTitle="Quản lý sản phẩm" />
      {openDialog && <AddProduct onClose={() => setOpenDialog(false)} />}
      {openDialog2 && (
        <EditProduct
          onClose={() => setOpenDialog2(false)}
          productDetail={productDetail}
        />
      )}
      <Button
        color="primary"
        variant="contained"
        onClick={() => setOpenDialog(true)}
      >
        Thêm sản phẩm
      </Button>
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
                Số lượng
              </TableCell>
              <TableCell align="center" style={{ width: "15%" }}>
                Đơn giá
              </TableCell>
              <TableCell align="center" style={{ width: "15%" }}>
                Thao tác
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.products.map((product) => (
              <TableRow>
                <TableCell align="center">
                  <Typography style={{ marginLeft: 12 }}>
                    {product.product_name}
                  </Typography>
                </TableCell>
                <TableCell align="center" style={{ width: "15%" }}>
                  <Typography>{product.qty}</Typography>
                </TableCell>
                <TableCell align="center" style={{ width: "15%" }}>
                  {getDisplayCurrency(Number(product.price))}
                </TableCell>
                <TableCell align="center" style={{ width: "15%" }}>
                  <Button onClick={handleDeleteProduct(product.product_id)}>
                    Xóa
                  </Button>
                  <Button onClick={handleProductDetail(product.product_id)}>
                    Chi tiết
                  </Button>
                  <Button onClick={handleEditProduct(product)}>Sửa</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManagerProducts;
