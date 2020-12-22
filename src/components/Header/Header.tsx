import { Menu } from "@material-ui/core";
import React from "react";
import Navbar from "../NavBar/NavBar";
import MidleBar from "../MidleBar/MidleBar";

interface Props {}

const Header = (props: Props) => {
  return (
    <div>
      <Navbar />
      <MidleBar />
    </div>
  );
};

export default Header;
