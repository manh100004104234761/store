import React from "react";
import Header from "../../components/Header/Header";
import Phone from "../../components/Phone/Phone";

interface Props {}

const PhoneDetail = (props: Props) => {
  return (
    <div>
      <Header />
      <Phone />
    </div>
  );
};

export default PhoneDetail;
