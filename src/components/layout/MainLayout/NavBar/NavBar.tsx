import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import NavItem, { ItemProps, NavItemProps } from "./NavItem";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "src/redux/action/product.action";
import { IGetAllCategoryRes } from "src/shared/type/product.type";
import { IProductState } from "src/redux/reducer/product.reducer";
import { StoreState } from "src/redux/store/store";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginLeft: 10,
      marginTop: 10,
      display: "flex",
    },
  })
);

const UserItems: NavItemProps[] = [
  {
    name: "Trang chủ",
    url: "/",
  },
  {
    name: "Quản lý",
    data: [
      {
        nameItem: "Giỏ hàng",
        urlItem: "/cart",
      },
      {
        nameItem: "Sản phẩm ưa thích",
        urlItem: "/wishlist",
      },
      {
        nameItem: "Lịch sử đơn hàng",
        urlItem: "/history-order",
      },
    ],
  },
  {
    name: "Liên hệ",
    url: "/contact",
  },
];

export default function NavBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const product = useSelector<StoreState, IProductState>(
    (state) => state.product
  );

  let listCategoryTemp: ItemProps[] = [];
  useEffect(() => {
    (async () => {
      try {
        const result = ((await dispatch(
          getAllCategory()
        )) as any) as IGetAllCategoryRes;
        if (result.status) {
          result.data.map((item) => {
            listCategoryTemp.push({
              nameItem: item.name,
              urlItem: `/category/${item.category_id}`,
            });
          });
        }
        let danhmuc: NavItemProps = {
          name: "Danh mục",
          data: listCategoryTemp,
        };
        if (UserItems.length == 3) {
          UserItems.push(danhmuc);
        }
      } catch (err) {}
    })();
  }, [product.isLoadedCategory]);

  return (
    <div className={classes.root}>
      {UserItems.map((item) => (
        <NavItem {...item} />
      ))}
    </div>
  );
}
