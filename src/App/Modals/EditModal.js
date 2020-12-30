import React from "react";
import Modal from "../shared/Modal";
import AddEditForm from "../AddEditForm/AddEditForm";

const EditModal = ({ editItem, onEditDone, closeMe }) => {
  return (
    <>
      {editItem && (
        <Modal closeMe={closeMe}>
          <header className="modal-header">
            <div className="title">Edit Item: <b>{editItem.name}</b> </div>
            <button onClick={closeMe}>x</button>
          </header>

          <AddEditForm editItem={editItem} onEditDone={onEditDone} onCancel={closeMe}/>
        </Modal>
      )}
    </>
  );
};
export default EditModal;
