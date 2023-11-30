import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      {/* Modal */}
      <div
        className="modal fade"
        id="nutritionalModal"
        tabIndex="-1"
        aria-labelledby="nutritionalModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="nutritionalModalLabel">
                Tabela Nutricional
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* Conteúdo da tabela nutricional aqui */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
