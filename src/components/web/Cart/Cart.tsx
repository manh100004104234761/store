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
  IconButton,
  Tooltip,
  Button,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import React, { useState } from "react";
import { getDisplayCurrency } from "../../../shared/ultis/intl.utils";
import DeleteIcon from "@material-ui/icons/Delete";
import Title from "../../common/Title/Title";

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
const Cart = (props: Props) => {
  const [cart, updateCart] = useState([]);
  const classes = useStyles();

  return (
    <div>
      <Title title="Thanh toán" subTitle="Thanh toán giỏ hàng của bạn" />
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
                Đơn giá
              </TableCell>
              <TableCell align="center" style={{ width: "15%" }}>
                Số lượng
              </TableCell>
              <TableCell align="center" style={{ width: "15%" }}>
                Thành tiền
              </TableCell>
              <TableCell align="center" style={{ width: "15%" }}>
                Thao tác
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center" className={classes.nameContainer}>
                <img
                  className={classes.imgStyle}
                  src={`${process.env.PUBLIC_URL}/images/harrypotter.jpg`}
                />
                <Typography style={{ marginLeft: 12 }}>Iphone12</Typography>
              </TableCell>
              <TableCell align="center" style={{ width: "15%" }}>
                {getDisplayCurrency(12000000)}
              </TableCell>
              <TableCell align="center" style={{ width: "15%" }}>
                <IconButton>
                  <AddIcon />
                </IconButton>
                <Typography>2</Typography>
                <IconButton>
                  <RemoveIcon />
                </IconButton>
              </TableCell>
              <TableCell align="center" style={{ width: "15%" }}>
                {getDisplayCurrency(24000000)}
              </TableCell>
              <TableCell align="center" style={{ width: "15%" }}>
                <IconButton>
                  <Tooltip title="Xóa sản phẩm">
                    <DeleteIcon />
                  </Tooltip>
                </IconButton>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center" className={classes.nameContainer}>
                <img
                  className={classes.imgStyle}
                  src={`${process.env.PUBLIC_URL}/images/c5.jpg`}
                />
                <Typography style={{ marginLeft: 12 }}>
                  Harry potter and the Philosopher's Stone
                </Typography>
              </TableCell>
              <TableCell align="center" style={{ width: "15%" }}>
                {getDisplayCurrency(250000)}
              </TableCell>
              <TableCell align="center" style={{ width: "15%" }}>
                <IconButton>
                  <AddIcon />
                </IconButton>
                <Typography>2</Typography>
                <IconButton>
                  <RemoveIcon />
                </IconButton>
              </TableCell>
              <TableCell align="center" style={{ width: "15%" }}>
                {getDisplayCurrency(500000)}
              </TableCell>
              <TableCell align="center" style={{ width: "15%" }}>
                <IconButton>
                  <Tooltip title="Xóa sản phẩm">
                    <DeleteIcon />
                  </Tooltip>
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <div className={classes.buttonContainer}>
        <Button
          variant="outlined"
          className={classes.buttonPlace}
          color="inherit"
        >
          Đặt hàng
        </Button>
      </div>
    </div>
  );
};

export default Cart;
