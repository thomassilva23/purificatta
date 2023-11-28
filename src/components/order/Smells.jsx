import React from "react";

import Guarana from "../../_assets/img/guarana.png";
import FrutasVermelhas from "../../_assets/img/frutas-vermelhas.png";
import Limao from "../../_assets/img/limao.png";
import Tangerina from "../../_assets/img/tangerina.png";
import AguaNatural from "../../_assets/img/agua-natural.png";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
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
                        <button className="button">Tabela nutricional</button>
                      </div>
                    </div>
                  </div>

                  <div className="container choice">
                    <div className="row">
                      <div className="col-4 column">
                        <img src={Guarana} alt="" />
                        <p className="text" style={{ color: "#8EE335" }}>
                          Guaraná
                        </p>
                      </div>
                      <div className="col-4 column">
                        <img src={FrutasVermelhas} alt="" />
                        <p className="text" style={{ color: "#BB0601" }}>
                          Frutas vermelhas
                        </p>
                      </div>
                      <div className="col-4 column">
                        <img src={Limao} alt="" />
                        <p className="text" style={{ color: "#FBDC0D" }}>
                          Limão
                        </p>
                      </div>
                      <div className="col column">
                        <img src={Tangerina} alt="" />
                        <p className="text" style={{ color: "#FEB76D" }}>
                          Tangerina
                        </p>
                      </div>
                      <div className="col column">
                        <img src={AguaNatural} alt="" />
                        <p className="text" style={{ color: "#8FCEED" }}>
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
