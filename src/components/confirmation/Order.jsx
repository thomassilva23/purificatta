import React from "react";

import Guarana from "../../_assets/img/guarana.png";
import FrutasVermelhas from "../../_assets/img/frutas-vermelhas.png";
import Limao from "../../_assets/img/limao.png";
import Tangerina from "../../_assets/img/tangerina.png";
import AguaNatural from "../../_assets/img/agua-natural.png";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const formatOptions = (option) => {
    switch (option) {
      case "AguaGelada":
        return "Água gelada";
      case "AguaComGas":
        return "Água com gás";
      case "AguaNatural":
        return "Água natural";
      default:
        return "Água natural";
    }
  };

  const formatSmells = (smell) => {
    switch (smell) {
      case "Guarana":
        return "Guaraná";
      case "FrutasVermelhas":
        return "Frutas vermelhas";
      case "Limao":
        return "Limão";
      case "Tangerina":
        return "Tangerina";
      case "AguaNatural":
        return "Água natural";
      default:
        return "Água natural";
    }
  };

  const formatFlavor = (flavor) => {
    switch (flavor) {
      case "1":
        return "Fraco";
      case "2":
        return "Médio";
      case "3":
        return "Forte";
      default:
        return "Fraco";
    }
  };

  const formatSize = (size) => {
    return size === "1L" ? "1 Litro" : size;
  };

  const getSmellImage = (smell) => {
    switch (smell) {
      case "Guarana":
        return Guarana;
      case "FrutasVermelhas":
        return FrutasVermelhas;
      case "Limao":
        return Limao;
      case "Tangerina":
        return Tangerina;
      case "AguaNatural":
      default:
        return AguaNatural;
    }
  };

  const smellImage = getSmellImage(props.smells);

  const options = formatOptions(props.options);
  const flavor = formatFlavor(props.flavor);
  const smells = formatSmells(props.smells);
  const size = formatSize(props.size || "200ml");

  return (
    <>
      <div className="container order">
        <div className="row">
          <div className="col-12">
            <div className="container top">
              <div className="row">
                <div className="col-6 left">
                  <p className="title">Confirmar escolha</p>
                </div>
                <div className="col-6 right">
                  <button
                    className="button-nutritional"
                    data-bs-toggle="modal"
                    data-bs-target="#nutritionalModal"
                  >
                    Tabela nutricional
                  </button>
                </div>
              </div>
            </div>
            <div className="container content">
              <div className="row">
                <div className="col-12">
                  <img src={smellImage} alt={smells} />

                  <p className="text-option">{options}</p>
                  <p className="text-flavor">{flavor}</p>
                  <p className="text-smells">{smells}</p>
                  <p className="text-size">{size}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
