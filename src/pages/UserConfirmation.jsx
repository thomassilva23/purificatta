import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";

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

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChoice = (choiceName, value) => {
    setOrder({ ...order, [choiceName]: value });
  };

  const mapOrderDetailsToApiFormat = (order) => {
    const mapSize = {
      //Volume
      "200ml": 200,
      "300ml": 300,
      "500ml": 500,
      "700ml": 700,
      "1L": 1000,
    };

    const mapOption = {
      //TipoAgua
      AguaGelada: 1,
      AguaComGas: 0,
      AguaNatural: 2,
    };

    const mapSmells = {
      //TipoAroma
      Guarana: 1,
      FrutasVermelhas: 2,
      Limao: 3,
      Tangerina: 4,
      AguaNatural: 0,
    };

    const mapFlavor = {
      //IntensidadeAroma
      1: 300,
      2: 600,
      3: 900,
    };

    return {
      Volume: mapSize[order.size] || 0,
      TipoAgua: mapOption[order.options] || 0,
      TipoAroma: mapSmells[order.smells] || 0,
      IntensidadeAroma: mapFlavor[order.flavor] || 0,
    };
  };

  const setLedsGreen = () => {
    const configLeds = {
      LedBlue: 105,
      LedGreen: 255,
      LedRed: 0,
    };
    axios
      .post("http://hml.allto.digital:5000/set_leds", configLeds)
      .then((response) => {
        console.log("Success Green Led:", response.data);
      })
      .catch((error) => {
        console.error("Error Green Led:", error);
      });
  };

  const setLedsRed = () => {
    const configLeds = {
      LedBlue: 0,
      LedGreen: 45,
      LedRed: 255,
    };
    axios
      .post("http://hml.allto.digital:5000/set_leds", configLeds)
      .then((response) => {
        console.log("Success Led Red:", response.data);
      })
      .catch((error) => {
        console.error("Error Led Red:", error);
      });
  };

  const confirmOrder = () => {
    setIsLoading(true); // Ativa o loader e a opacidade

    const apiPayload = mapOrderDetailsToApiFormat(order);

    axios
      .post("http://hml.allto.digital:5000/entrega_copo", apiPayload)
      .then((response) => {
        setLedsGreen();
        console.log("Leds success:", response.data);

        setTimeout(() => {
          setIsLoading(false); // Desativa o loader e a opacidade
          navigate("/"); // Navega para a página inicial
        }, 10000); // Aguarda 10 segundos
      })
      .catch((error) => {
        setLedsRed();
        console.error("Leds error:", error);
        setIsLoading(false); // Em caso de erro, desativa o loader e a opacidade mais cedo
      });
  };

  const cancelOrder = () => {
    console.log("User canceled order");
    navigate("/");
  };

  return (
    <>
      {isLoading && (
        <div className="loading-overlay">
          <span class="loader"></span>
        </div>
      )}

      <Header />

      <Order
        options={orderDetails.options}
        smells={orderDetails.smells}
        flavor={orderDetails.flavor}
        size={orderDetails.size}
      />

      {/* IF the user changes the Flavor, it will replace the value in "orderDetails.flavor" */}

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
