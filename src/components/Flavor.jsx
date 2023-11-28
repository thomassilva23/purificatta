import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <>
      <div className="container flavor">
        <div className="row">
          <div className="col-12">
            <div className="container content">
              <div className="row">
                <div className="col-12">
                  <p className="title">Intensidade do sabor</p>

                  <div className="container">
                    <div className="row">
                      <div className="col-12">slider</div>
                    </div>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-4">
                        <p className="text weak">Fraco</p>
                      </div>
                      <div className="col-4">
                        <p className="text medium">Médio</p>
                      </div>
                      <div className="col-4">
                        <p className="text strong">Forte</p>
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
