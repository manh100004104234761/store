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
    url: "/admin/manager-products",
  },
  {
    name: "Quản lý",
    data: [
      {
        nameItem: "Quản lý sản phẩm",
        urlItem: "/admin/manager-products",
      },
      {
        nameItem: "Quản lý người dùng",
        urlItem: "/admin/manager-users",
      },
      {
        nameItem: "Quản lý đơn hàng",
        urlItem: "/admin/manager-orders",
      },
      {
        nameItem: "Quản lý tin tức",
        urlItem: "/admin/manager-news",
      },
    ],
  },
  {
    name: "Thống kê",
    data: [
      {
        nameItem: "Thống kê người dùng",
        urlItem: "/admin/statistics-user",
      },
      {
        nameItem: "Thống kê doanh thu",
        urlItem: "/admin/statistics-revenue",
      },
    ],
  },
];

export default function NavBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const product = useSelector<StoreState, IProductState>(
    (state) => state.product
  );

  let listCategoryTemp: ItemProps[] = [];

  return (
    <div className={classes.root}>
      {UserItems.map((item) => (
        <NavItem {...item} />
      ))}
    </div>
  );
}
