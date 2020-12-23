import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import NavItem, { NavItemProps } from "./NavItem";

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
    name: "Danh mục",
    data: [
      {
        nameItem: "Laptop",
        urlItem: "/category/laptop",
      },
      {
        nameItem: "Điện thoại",
        urlItem: "/category/phone",
      },
    ],
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
        urlItem: "/favorite",
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

  return (
    <div className={classes.root}>
      {UserItems.map((item) => (
        <NavItem {...item} />
      ))}
    </div>
  );
}
