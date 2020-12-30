import React from "react";

import Modal from "../shared/Modal";

const DeleteModal = ({ deltItem, onDeleteDone, closeMe }) => {
  return (
    <>
      {deltItem && (
        <Modal>
          <header className="modal-header title--danger">
            <div className="title">are you sure?</div>
            <button onClick={closeMe}>x</button>
          </header>
          <section className="modal-body">
           
              You are about to delete <b>{deltItem.name}</b>
            
          </section>
          <footer className="modal-footer">
            <button
              className="footer__button button--warn"
              onClick={() => {
                onDeleteDone(deltItem.id);
              }}
            >
              Ok
            </button>
            <button
              className="footer__button"
              onClick={closeMe}
            >
              Cancel
            </button>
          </footer>
        </Modal>
      )}
    </>
  );
};
export default DeleteModal;
