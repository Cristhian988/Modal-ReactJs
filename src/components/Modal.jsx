import React from "react";
import "./Modal.css";

export default function Modal({ isOpen, closeModal, children, title }) {
  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`modal ${isOpen && "modal-open"}`} onClick={closeModal}>
      <div className="modal__dialog" onClick={handleModalDialogClick}>
        <h1>{title}</h1>
        <button onClick={closeModal}>Close Modal</button>
        {children}
      </div>
    </div>
  );
}
