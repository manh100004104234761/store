import React from "react";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginLeft: 10,
      marginTop: 10,
      display: "flex",
    },
    menuItem: {
      width: 100,
      height: "100%",
      textTransform: "none",
      border: "none",
      background: "none",
      fontSize: 16,
      marginLeft: 5,
      marginTop: 5,
      marginBottom: 5,
      textAlign: "left",
    },
    popover: {
      pointerEvents: "none",
    },
    paper: {
      padding: theme.spacing(1),
    },
    boxContainer: {
      display: "flex",
      flexDirection: "column",
    },
  })
);

export default function PopoverPopupState() {
  const classes = useStyles();

  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div className={classes.root}>
          <Typography>
            <Button className={classes.menuItem} onClick={preventDefault}>
              Trang chủ
            </Button>
          </Typography>
          <Typography>
            <Button className={classes.menuItem} {...bindTrigger(popupState)}>
              Danh mục
            </Button>
          </Typography>
          <Typography>
            <Button className={classes.menuItem} {...bindTrigger(popupState)}>
              Hello
            </Button>
          </Typography>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <div className={classes.boxContainer}>
              <button className={classes.menuItem}>Điện thoại</button>
              <button className={classes.menuItem}>Laptop</button>
              <button className={classes.menuItem}>Đồng hồ</button>
            </div>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
