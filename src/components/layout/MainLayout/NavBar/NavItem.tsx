import React from "react";
import Button from "@material-ui/core/Button";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import {
  withStyles,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core/styles";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  })
);

export interface ItemProps {
  nameItem: string;
  urlItem: string;
}

export interface NavItemProps {
  name: string;
  url?: string;
  data?: Array<ItemProps>;
}

export default function NavItem(navItemProps: NavItemProps) {
  const { name, url, data } = navItemProps;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (data) {
      setAnchorEl(event.currentTarget);
    } else {
      // TODO Return trang chu
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className={classes.menuItem}
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {name}
      </Button>

      {data && (
        <StyledMenu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          {data.map((item) => (
            <MenuItem>
              <Button href={item.urlItem}>{item.nameItem}</Button>
            </MenuItem>
          ))}
        </StyledMenu>
      )}
    </div>
  );
}
