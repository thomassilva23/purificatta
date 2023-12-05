import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

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
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, []);

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

  useEffect(() => {
    const setInitialLeds = {
      LedBlue: 255,
      LedGreen: 155,
      LedRed: 0,
    };

    axios
      .post("http://hml.allto.digital:5000/set_leds", setInitialLeds)
      .then((response) => {
        console.log("Success Blue Leds:", response.data);
      })
      .catch((error) => {
        console.error("Error Blue Leds:", error);
      });
  }, []); // Empty dependency array, the effect will only be executed on component assembly

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
            <button className="button-confirmation" onClick={goToConfirmation}>
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
