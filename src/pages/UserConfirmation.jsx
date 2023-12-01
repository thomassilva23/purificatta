import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Flavor from "../components/Flavor";
import Order from "../components/confirmation/Order";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Whatsapp from "../components/Whatsapp";
import Footer from "../components/Footer";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const location = useLocation();
  const { orderDetails } = location.state || {}; // State isn't undefined

  const [order, setOrder] = useState(orderDetails);

  const handleChoice = (choiceName, value) => {
    setOrder({ ...order, [choiceName]: value });
  };

  const confirmOrder = () => {
    console.log({ state: { orderDetails: order } });
  };

  const cancelOrder = () => {
    console.log({ state: { orderDetails: order } });
  };

  return (
    <>
      <Header />

      <Order
        options={orderDetails.options}
        smells={orderDetails.smells}
        flavor={orderDetails.flavor}
        size={orderDetails.size}
      />

      <Flavor onChoice={(value) => handleChoice("flavor", value)} />

      <Modal />

      <div className="container confirmation">
        <div className="row">
          <div className="col-12">
            <button className="button-confirmation" onClick={confirmOrder}>
              Confirmar
            </button>
          </div>
        </div>
      </div>

      <div className="container cancel">
        <div className="row">
          <div className="col-12">
            <button className="button-cancel" onClick={cancelOrder}>
              Cancelar
            </button>
          </div>
        </div>
      </div>

      <Whatsapp />
      <Footer />
    </>
  );
};
