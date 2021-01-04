import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TopBar from "./TopBar/TopBar";
import NavBar from "./NavBar/NavBar";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
    width: theme.breakpoints.values.lg,
    maxWidth: "100%",
    margin: "0 auto",
    padding: theme.spacing(5),
  },
}));

interface RouteProps {
  children: React.ReactNode;
}

const MainLayoutAdmin = (props: RouteProps) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <div>
      <TopBar />
      <NavBar />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayoutAdmin;
