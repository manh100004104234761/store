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
const ManagerNews = (props: Props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [listNews, setListNews] = useState([] as INew[]);

  const [newDetail, setNewDetail] = useState({} as INew);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialog2, setOpenDialog2] = useState(false);

  const handleEditNew = (iNew: INew) => () => {
    setNewDetail(iNew);
    setOpenDialog2(true);
  };

  const classes = useStyles();
  useEffect(() => {
    (async () => {
      try {
        const result = ((await dispatch(getAllNews())) as any) as INewRes;
        if (result.status) {
          // console.log(result.data);
          setListNews(result.data);
          console.log("ok");
        }
      } catch (err) {}
    })();
  }, []);

  return (
    <div>
      <Title title="Quản lý tin tức" subTitle="Quản lý tin tức" />
      {openDialog && (
        <AddNew
          onClose={() => setOpenDialog(false)}
          listNews={listNews}
          setListNews={setListNews}
        />
      )}
      {openDialog2 && (
        <EditNew
          onClose={() => setOpenDialog2(false)}
          newDetail={newDetail}
          listNews={listNews}
          setListNews={setListNews}
        />
      )}
      <Button
        color="primary"
        variant="contained"
        onClick={() => setOpenDialog(true)}
      >
        Thêm tin tức
      </Button>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ width: "10%" }}>
                Tin tức
              </TableCell>
              <TableCell align="center" style={{ width: "20%" }}>
                Title
              </TableCell>
              <TableCell align="center" style={{ width: "20%" }}>
                Short Content
              </TableCell>
              <TableCell align="center" style={{ width: "40%" }}>
                Content
              </TableCell>
              <TableCell align="center" style={{ width: "10%" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listNews.map((tintuc) => (
              <TableRow>
                <TableCell align="center" style={{ width: "10%" }}>
                  <Typography style={{ marginLeft: 12 }}>
                    {tintuc.new_id}
                  </Typography>
                </TableCell>
                <TableCell align="center" style={{ width: "20%" }}>
                  <Typography>{tintuc.title}</Typography>
                </TableCell>
                <TableCell align="center" style={{ width: "20%" }}>
                  <Typography>{tintuc.short_content}</Typography>
                </TableCell>
                <TableCell align="center" style={{ width: "40%" }}>
                  <Typography>{tintuc.content}</Typography>
                </TableCell>
                <TableCell align="center" style={{ width: "10%" }}>
                  <Button onClick={handleEditNew(tintuc)}>Sửa</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManagerNews;
