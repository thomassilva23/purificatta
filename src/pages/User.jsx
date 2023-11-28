import React from "react";

//COMPONENTS
import Options from "../components/order/Options";
import Smells from "../components/order/Smells";
import Flavor from "../components/Flavor";
import Size from "../components/order/Size";
import Whatsapp from "../components/Whatsapp";
import Header from "../components/Header";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <>
      <Header />
      <Options />
      <Smells />
      <Flavor />
      <Size />
      <Whatsapp />
    </>
  );
};
