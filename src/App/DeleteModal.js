import React, { useEffect, useState } from "react";

import Modal from "./shared/Modal";

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
            <h4>
              You are about to delete <em>{deltItem.name}</em>
            </h4>
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
              cancel
            </button>
          </footer>
        </Modal>
      )}
    </>
  );
};
export default DeleteModal;
