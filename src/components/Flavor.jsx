import React, { useState } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ onChoice }) => {
  const [flavor, setFlavorStrength] = useState(1); // Initializes with a default value

  const handleSliderChange = (event) => {
    const newStrength = event.target.value;
    setFlavorStrength(newStrength);
    onChoice(newStrength); // Calls the parent component's onChoice function with the new value
  };
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
                      <input
                        type="range"
                        min="1"
                        max="3"
                        step="1"
                        className="slider"
                        id="strengthSlider"
                        value={flavor}
                        onChange={handleSliderChange}
                      />
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
