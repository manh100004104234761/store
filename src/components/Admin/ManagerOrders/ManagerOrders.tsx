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
import { INew, INewRes } from "src/shared/type/new.type";
import { getAllNews } from "src/redux/action/new.action";
import EditNew from "../EditNew/EditNew";
import AddNew from "../AddNew/AddNew";
import {
  checkoutAdminReq,
  GetAllOrdersRes,
  IOrder,
} from "src/shared/type/order.type";
import { cancel, checkout, getAllOrders } from "src/redux/action/order.action";

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
const ManagerOrders = (props: Props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [listOrders, setListOrders] = useState([] as IOrder[]);

  const handleOderDetail = (orderDetail: IOrder) => () => {
    // console.log(orderDetail);
    history.push(`/admin/orders/${orderDetail.cart_id}`, {
      orderDetail,
    });
  };

  const handleEditOrder = (order_id: string) => async () => {
    let checkoutRequest: checkoutAdminReq = {
      cart_id: order_id,
    };
    const result = (await dispatch(checkout(checkoutRequest))) as any;
    if (result.status) {
      const result2 = ((await dispatch(
        getAllOrders()
      )) as any) as GetAllOrdersRes;
      if (result2.status) {
        setListOrders(result2.data);
        console.log("ok");
      }
    }
  };

  const handleCancelOrder = (order_id: string) => async () => {
    let cancelRequest: checkoutAdminReq = {
      cart_id: order_id,
    };
    const result = (await dispatch(cancel(cancelRequest))) as any;
    if (result.status) {
      const result2 = ((await dispatch(
        getAllOrders()
      )) as any) as GetAllOrdersRes;
      if (result2.status) {
        setListOrders(result2.data);
        console.log("ok");
      }
    }
  };

  const classes = useStyles();
  useEffect(() => {
    (async () => {
      try {
        const result = ((await dispatch(
          getAllOrders()
        )) as any) as GetAllOrdersRes;
        if (result.status) {
          setListOrders(result.data);
          console.log("ok");
        }
      } catch (err) {}
    })();
  }, []);

  return (
    <div>
      <Title title="Quản lý đơn hàng" subTitle="Quản lý đơn hàng" />
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ width: "20%" }}>
                Đơn hàng
              </TableCell>
              <TableCell align="center" style={{ width: "20%" }}>
                Người dùng
              </TableCell>
              <TableCell align="center" style={{ width: "20%" }}>
                Giá trị
              </TableCell>
              <TableCell align="center" style={{ width: "20%" }}>
                Trạng thái
              </TableCell>
              <TableCell align="center" style={{ width: "20%" }}>
                Thao tác
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listOrders.map((order) => (
              <TableRow>
                <TableCell align="center" style={{ width: "20%" }}>
                  <Typography style={{ marginLeft: 12 }}>
                    {order.cart_id}
                  </Typography>
                </TableCell>
                <TableCell align="center" style={{ width: "20%" }}>
                  <Typography>{order.customer_email}</Typography>
                </TableCell>
                <TableCell align="center" style={{ width: "20%" }}>
                  <Typography>{order.total}</Typography>
                </TableCell>
                <TableCell align="center" style={{ width: "20%" }}>
                  <Typography>
                    {order.status === "1" && "Chưa order"}
                    {order.status === "2" && "Chưa thanh toán"}
                    {order.status === "0" && "Đã thanh toán"}
                    {order.status === "3" && "Đã hủy"}
                  </Typography>
                </TableCell>
                <TableCell align="center" style={{ width: "20%" }}>
                  <Button onClick={handleOderDetail(order)}>Chi tiết</Button>
                  {order.status === "2" && (
                    <div>
                      <Button onClick={handleEditOrder(order.cart_id)}>
                        Checkout
                      </Button>
                      <Button onClick={handleCancelOrder(order.cart_id)}>
                        Cancel
                      </Button>
                    </div>
                  )}
                  {order.status !== "2" && "Không"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManagerOrders;
