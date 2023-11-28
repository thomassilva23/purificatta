import React from "react";

import Ml200 from "../../_assets/img/200ml.png";
import Ml300 from "../../_assets/img/300ml.png";
import Ml500 from "../../_assets/img/500ml.png";
import Ml700 from "../../_assets/img/700ml.png";
import L1 from "../../_assets/img/1l.png";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <>
      <div className="container size">
        <div className="row">
          <div className="col-12">
            <div className="container content">
              <div className="row">
                <div className="col-12">
                  <p className="title">Volume</p>

                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <img src={Ml200} alt="" />
                        <p className="text">200ml</p>
                      </div>
                      <div className="col">
                        <img src={Ml300} alt="" />
                        <p className="text">300ml</p>
                      </div>
                      <div className="col">
                        <img src={Ml500} alt="" />
                        <p className="text">500ml</p>
                      </div>
                      <div className="col">
                        <img src={Ml700} alt="" />
                        <p className="text">700ml</p>
                      </div>
                      <div className="col">
                        <img src={L1} alt="" />
                        <p className="text">1 litro</p>
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
