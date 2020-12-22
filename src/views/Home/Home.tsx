import React from "react";
import Cart from "../../components/Cart/Cart";
import Header from "../../components/Header/Header";
import MainPage from "../../components/MainPage/MainPage";
import Phone from "../../components/Phone/Phone";

interface Props {}

const Home = (props: Props) => {
  return (
    <div>
      <Header />
      {/* <MainPage /> */}
      {/* <PhoneDetail /> */}
      <Cart />
    </div>
  );
};

export default Home;
