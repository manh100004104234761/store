import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import MidleBarItem from "../MidleBarItem/MidleBarItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginLeft: 10,
      marginTop: 10,
      display: "flex",
    },
  })
);
const danhmuc = ["Danh mục 1", "Danh mục 2", "Danh mục 3"];
const quanly = ["Giỏ hàng", "Ưa thích", "Lịch sở đơn hàng"];

export default function MidleBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MidleBarItem name="Trang chủ" />
      <MidleBarItem name="Danh mục" data={danhmuc} />
      <MidleBarItem name="Quản lý" data={quanly} />
      <MidleBarItem name="Liên hệ" />
    </div>
  );
}
