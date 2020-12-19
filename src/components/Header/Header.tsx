import { Menu } from "@material-ui/core";
import React from "react";
import Navbar from "../NavBar/NavBar";
import MidleBar from "../MidleBar/MidleBar";
import AddToCart from "../AddToCart/AddToCart";
import AddToCompare from "../AddToCompare/AddToCompare";
import AddToFavorite from "../AddToFavorite/AddToFavorite";
import CardItem from "../CardItem/CardItem";
import New from "../New/New";

interface Props {}

const Header = (props: Props) => {
  return (
    <div>
      <Navbar />
      <MidleBar />
      <New />
      {/* <CardItem /> */}
    </div>
  );
};

export default Header;
