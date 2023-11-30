import React, { useState } from "react";

import Guarana from "../../_assets/img/guarana.png";
import FrutasVermelhas from "../../_assets/img/frutas-vermelhas.png";
import Limao from "../../_assets/img/limao.png";
import Tangerina from "../../_assets/img/tangerina.png";
import AguaNatural from "../../_assets/img/agua-natural.png";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ onChoice }) => {
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);

  const makeChoice = (choice) => {
    setSelected(choice); // Atualiza o estado com a escolha
    onChoice(choice); // Chama a função passada como prop
  };

  const getColor = (choice) => {
    if (selected === choice || hovered === choice) {
      switch (choice) {
        case "Guarana":
          return "#8EE335";
        case "FrutasVermelhas":
          return "#BB0601";
        case "Limao":
          return "#FBDC0D";
        case "Tangerina":
          return "#FEB76D";
        case "AguaNatural":
          return "#8FCEED";
        default:
          return "#808080";
      }
    }
    return "#808080";
  };

  return (
    <>
      <div className="container smells">
        <div className="row">
          <div className="col-12">
            <div className="container content">
              <div className="row">
                <div className="col-12">
                  <div className="container top">
                    <div className="row">
                      <div className="col-4 left">
                        <p className="title">Aromas</p>
                      </div>
                      <div className="col-8 right">
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

                  <div className="container choice">
                    <div className="row">
                      <div
                        className={`col-4 column ${
                          selected === "Guarana" ? "selected" : ""
                        }`}
                        onClick={() => makeChoice("Guarana")}
                        onMouseEnter={() => setHovered("Guarana")}
                        onMouseLeave={() => setHovered(null)}
                      >
                        <img src={Guarana} alt="" />
                        <p
                          className="text"
                          style={{ color: getColor("Guarana") }}
                        >
                          Guaraná
                        </p>
                      </div>
                      <div
                        className={`col-4 column ${
                          selected === "FrutasVermelhas" ? "selected" : ""
                        }`}
                        onClick={() => makeChoice("FrutasVermelhas")}
                        onMouseEnter={() => setHovered("FrutasVermelhas")}
                        onMouseLeave={() => setHovered(null)}
                      >
                        <img src={FrutasVermelhas} alt="" />
                        <p
                          className="text"
                          style={{ color: getColor("FrutasVermelhas") }}
                        >
                          Frutas vermelhas
                        </p>
                      </div>
                      <div
                        className={`col-4 column ${
                          selected === "Limao" ? "selected" : ""
                        }`}
                        onClick={() => makeChoice("Limao")}
                        onMouseEnter={() => setHovered("Limao")}
                        onMouseLeave={() => setHovered(null)}
                      >
                        <img src={Limao} alt="" />
                        <p
                          className="text"
                          style={{ color: getColor("Limao") }}
                        >
                          Limão
                        </p>
                      </div>
                      <div
                        className={`col column ${
                          selected === "Tangerina" ? "selected" : ""
                        }`}
                        onClick={() => makeChoice("Tangerina")}
                        onMouseEnter={() => setHovered("Tangerina")}
                        onMouseLeave={() => setHovered(null)}
                      >
                        <img src={Tangerina} alt="" />
                        <p
                          className="text"
                          style={{ color: getColor("Tangerina") }}
                        >
                          Tangerina
                        </p>
                      </div>
                      <div
                        className={`col column ${
                          selected === "AguaNatural" ? "selected" : ""
                        }`}
                        onClick={() => makeChoice("AguaNatural")}
                        onMouseEnter={() => setHovered("AguaNatural")}
                        onMouseLeave={() => setHovered(null)}
                      >
                        <img src={AguaNatural} alt="" />
                        <p
                          className="text"
                          style={{ color: getColor("AguaNatural") }}
                        >
                          Água natural
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
