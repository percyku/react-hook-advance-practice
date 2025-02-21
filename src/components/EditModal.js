import React from "react";

function EditModal({
  // modaaId,
  modalRef,
  closeModal = {},
  saveModal = {},
  footer = "false",
  modalTitle = "Modal Title",
  otherComponent = {},
}) {
  return (
    <div
      className="modal fade"
      tabIndex="-1"
      // id={id}
      ref={modalRef}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{modalTitle}</h5>
            <button
              type="button"
              className="btn-close"
              //   data-bs-dismiss="modal"
              onClick={closeModal}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{otherComponent}</div>

          {!footer && (
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                //   data-bs-dismiss="modal"
                onClick={closeModal}
              >
                關閉
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={saveModal}
              >
                存檔
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EditModal;
