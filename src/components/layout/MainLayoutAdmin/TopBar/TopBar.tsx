import React, { useState } from "react";
import {
  fade,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Avatar from "@material-ui/core/Avatar";
import { IUserState } from "src/redux/reducer/user.reducer";
import { StoreState } from "src/redux/store/store";
import { useSelector } from "react-redux";
import { logout } from "src/redux/action/user.action";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { IProductState } from "src/redux/reducer/product.reducer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    authButton: {
      marginLeft: "auto",
    },
    search: {
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: theme.spacing(3),
      width: "100%",
      border: "0.5px solid white",
      color: "white",
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.up("md")]: {
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    userContainer: {
      display: "flex",
      alignItems: "center",
    },
    badge: {
      border: `2px`,
      justifyContent: "center",
      display: "flex",
      color: "white",
      height: "100%",
    },
  })
);

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const TopBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector<StoreState, IUserState>((state) => state.user);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const product = useSelector<StoreState, IProductState>(
    (state) => state.product
  );

  const handleSearchProduct = async (event: any) => {
    if (value) {
      history.push(`/search-product/${value}`);
    }
  };

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const Profile = () => {
    handleMenuClose();
    history.push("/admin/account");
  };

  const logOut = () => {
    handleMenuClose();
    dispatch(logout());
    history.push("/");
  };

  const [value, setValue] = useState<string>("");

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={Profile}>Profile</MenuItem>
      <MenuItem onClick={logOut}>Log out</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <a href="/admin/manager-products" className={classes.badge}>
              <HomeIcon style={{ fontSize: 40 }} />
            </a>
          </IconButton>
          <div className={classes.search}>
            <IconButton
              className={classes.searchIcon}
              onClick={handleSearchProduct}
            >
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={handleChange}
            />
          </div>
          <div className={classes.authButton}>
            {
              <div className={classes.userContainer}>
                <div style={{ marginLeft: 10, width: 150, textAlign: "right" }}>
                  <Typography noWrap display="block">
                    {user.user?.username}
                  </Typography>
                </div>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <Avatar alt={user.user?.username} />
                </IconButton>
              </div>
            }
          </div>
        </Toolbar>
      </AppBar>
      {!user.isLoggedIn ? null : renderMenu}
    </div>
  );
};

export default TopBar;
