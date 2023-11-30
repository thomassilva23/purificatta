import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//COMPONENTS
import Options from "../components/order/Options";
import Smells from "../components/order/Smells";
import Flavor from "../components/Flavor";
import Size from "../components/order/Size";
import Whatsapp from "../components/Whatsapp";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [order, setOrder] = useState({
    options: "",
    flavor: "",
    smells: "",
    size: "",
  });

  const handleChoice = (choiceName, value) => {
    setOrder({ ...order, [choiceName]: value });
  };

  const navigate = useNavigate();

  const goToConfirmation = () => {
    navigate("/confirmation", { state: { orderDetails: order } });
  };

  return (
    <>
      <Header />
      <Options onChoice={(value) => handleChoice("options", value)} />
      <Smells onChoice={(value) => handleChoice("smells", value)} />
      <Flavor onChoice={(value) => handleChoice("flavor", value)} />
      <Size onChoice={(value) => handleChoice("size", value)} />

      <div className="container confirmation">
        <div className="row">
          <div className="col-12">
            <button className="button" onClick={goToConfirmation}>
              Confirmar
            </button>
          </div>
        </div>
      </div>
      <Modal />
      <Whatsapp />
      <Footer />
    </>
  );
};
