import React, { useEffect, useState } from "react";

import Modal from "./Modal";
import AddEditForm from "./AddEditForm";
const EditModal = ({ editItem, onEditDone, closeMe }) => {
  return (
    <>
      {editItem && (
        <Modal>
          <header className="modal-header title--danger">
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
