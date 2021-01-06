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
import {
  checkoutAdminReq,
  GetAllOrdersRes,
  IOrder,
} from "src/shared/type/order.type";
import { checkout, getAllOrders } from "src/redux/action/order.action";
import { blockUserReq, GetAllUserRes, IUser } from "src/shared/type/user.type";
import {
  blockUser,
  getAllUser,
  unblockUser,
} from "src/redux/action/user.action";

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
const ManagerUser = (props: Props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [listUser, setListUser] = useState([] as IUser[]);

  const handleUserDetail = (userDetail: IUser) => () => {
    // console.log(userDetail);
    history.push(`/admin/users/${userDetail.user_id}`, {
      userDetail,
    });
  };

  // const handleEditOrder = (order_id: string) => async () => {
  //   let checkoutRequest: checkoutAdminReq = {
  //     cart_id: order_id,
  //   };
  //   const result = (await dispatch(checkout(checkoutRequest))) as any;
  //   if (result.status) {
  //     const result2 = ((await dispatch(getAllUser())) as any) as GetAllUserRes;
  //     if (result2.status) {
  //       setListUser(result2.data);
  //       console.log("ok");
  //     }
  //   }
  // };

  const handleBlockUser = (id: string) => async () => {
    let blockUserRequest: blockUserReq = {
      user_id: id,
    };
    const result = (await dispatch(blockUser(blockUserRequest))) as any;
    if (result.status) {
      const result2 = ((await dispatch(getAllUser())) as any) as GetAllUserRes;
      if (result2.status) {
        setListUser(result2.data);
        console.log("ok");
      }
    }
  };

  const handleUnblockUser = (id: string) => async () => {
    let unblockUserRequest: blockUserReq = {
      user_id: id,
    };
    const result = (await dispatch(unblockUser(unblockUserRequest))) as any;
    if (result.status) {
      const result2 = ((await dispatch(getAllUser())) as any) as GetAllUserRes;
      if (result2.status) {
        setListUser(result2.data);
        console.log("ok");
      }
    }
  };

  const classes = useStyles();
  useEffect(() => {
    (async () => {
      try {
        const result = ((await dispatch(getAllUser())) as any) as GetAllUserRes;
        if (result.status) {
          setListUser(result.data);
          console.log("ok");
        }
      } catch (err) {}
    })();
  }, []);

  return (
    <div>
      <Title title="Quản lý người dùng" subTitle="Quản lý người dùng" />
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ width: "20%" }}>
                ID
              </TableCell>
              <TableCell align="center" style={{ width: "20%" }}>
                Email
              </TableCell>
              <TableCell align="center" style={{ width: "20%" }}>
                Tên
              </TableCell>
              <TableCell align="center" style={{ width: "20%" }}>
                Chức năng
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
            {listUser.map((user) => (
              <TableRow>
                <TableCell align="center" style={{ width: "20%" }}>
                  <Typography style={{ marginLeft: 12 }}>
                    {user.user_id}
                  </Typography>
                </TableCell>
                <TableCell align="center" style={{ width: "20%" }}>
                  <Typography>{user.email}</Typography>
                </TableCell>
                <TableCell align="center" style={{ width: "20%" }}>
                  <Typography>
                    {user.first_name.concat(user.last_name)}
                  </Typography>
                </TableCell>
                <TableCell align="center" style={{ width: "20%" }}>
                  <Typography>
                    {user.rule === "0" && "Admin"}
                    {user.rule === "1" && "Người dùng"}
                    {user.rule === "2" && "Đã khóa"}
                  </Typography>
                </TableCell>
                <TableCell align="center" style={{ width: "20%" }}>
                  <Typography>
                    {user.is_active === "0" && "Offline"}
                    {user.is_active === "1" && "Online"}
                  </Typography>
                </TableCell>
                <TableCell align="center" style={{ width: "20%" }}>
                  <Button onClick={handleUserDetail(user)}>Chi tiết</Button>
                  {user.rule === "1" && (
                    <div>
                      <Button onClick={handleBlockUser(user.user_id)}>
                        Block
                      </Button>
                    </div>
                  )}
                  {user.rule === "2" && (
                    <div>
                      <Button onClick={handleUnblockUser(user.user_id)}>
                        Unblock
                      </Button>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManagerUser;
