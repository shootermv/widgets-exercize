import React, { useEffect, useState } from "react";

import Modal from "./Modal";

const DeleteModal = ({ deltItem, setDeltItem, deleteStock }) => {
  return (
    <>
      {deltItem && (
        <Modal>
          <header className="modal-header title--danger">
            <div className="title">are you sure?</div>
            <button onClick={() => setDeltItem(null)}>x</button>
          </header>
          <section className="modal-body">
            <h4>
              You are about to delete <em>ss</em> node
            </h4>
          </section>
          <footer className="modal-footer">
            <button
              className="footer__button button--ok"
              onClick={() => {
                deleteStock(deltItem.id);
                setDeltItem(null);
              }}
            >
              Ok
            </button>
            <button
              className="footer__button"
              onClick={() => setDeltItem(null)}
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
