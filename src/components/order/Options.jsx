import React from "react";
import AguaComGas from "../../_assets/img/agua-gas.png";
import AguaGelada from "../../_assets/img/agua-gelada.png";
import AguaNatural from "../../_assets/img/agua-natural.png";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <>
      <div className="container options">
        <div className="row">
          <div className="col-12">
            <div className="container content">
              <div className="row">
                <div className="col-12">
                  <p className="title">Tipo</p>

                  <div className="container choice">
                    <div className="row">
                      <div className="col-4 column">
                        <img src={AguaComGas} alt="Água com gás" />
                        <p className="text">Água com gás</p>
                      </div>
                      <div className="col-4 column">
                        <img src={AguaGelada} alt="" />
                        <p className="text">Água gelada</p>
                      </div>
                      <div className="col-4 column">
                        <img src={AguaNatural} alt="" />
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
