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
    // Aqui você pode adicionar qualquer lógica adicional necessária antes de confirmar o pedido
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
            <button className="button" onClick={confirmOrder}>
              Confirmar
            </button>
          </div>
        </div>
      </div>

      <Whatsapp />
      <Footer />
    </>
  );
};
