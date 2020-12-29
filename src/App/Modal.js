import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

const Modal = ({ children }) => {
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    if (!modalRoot || !elRef.current) return;
    modalRoot.appendChild(elRef.current);

    return () => {
      modalRoot.removeChild(elRef.current);
    };
  }, []);

  return createPortal(
    <div className="modal-container">{children}</div>,
    elRef.current
  );
};

export default Modal;
