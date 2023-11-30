import React, { useState } from "react";

import AguaComGas from "../../_assets/img/agua-gas.png";
import AguaGelada from "../../_assets/img/agua-gelada.png";
import AguaNatural from "../../_assets/img/agua-natural.png";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ onChoice }) => {
  const [selected, setSelected] = useState(null);

  const makeChoice = (choice) => {
    setSelected(choice); // Atualiza o estado com a escolha
    onChoice(choice); // Chama a função passada como prop
  };

  return (
    <>
      <div className="container options-header">
        <div className="row">
          <div className="col-12">
            <p className="title">Escolha suas opções</p>
          </div>
        </div>
      </div>

      <div className="container options">
        <div className="row">
          <div className="col-12">
            <div className="container content">
              <div className="row">
                <div className="col-12">
                  <p className="title">Tipo</p>

                  <div className="container choice">
                    <div className="row">
                      <div
                        className={`col-4 column ${
                          selected === "AguaComGas" ? "selected" : ""
                        }`}
                        onClick={() => makeChoice("AguaComGas")}
                      >
                        <img src={AguaComGas} alt="Água com gás" />
                        <p className="text">Água com gás</p>
                      </div>
                      <div
                        className={`col-4 column ${
                          selected === "AguaGelada" ? "selected" : ""
                        }`}
                        onClick={() => makeChoice("AguaGelada")}
                      >
                        <img src={AguaGelada} alt="Água gelada" />
                        <p className="text">Água gelada</p>
                      </div>
                      <div
                        className={`col-4 column ${
                          selected === "AguaNatural" ? "selected" : ""
                        }`}
                        onClick={() => makeChoice("AguaNatural")}
                      >
                        <img src={AguaNatural} alt="Água natural" />
                        <p className="text">Água natural</p>
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
