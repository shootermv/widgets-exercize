import React, { useState } from "react";

import EditModal from "../Modals/EditModal";
import "./Details.css";

import { NumToWordsInt } from "../../api/utils";
const Details = ({ selected: widget, onItemUpdated }) => {
  const [editItem, setEditItem] = useState(null);

  if (!widget) return <main>Select some widget</main>;
  const { name, mnumber, keyVals } = widget;
  const onEditDone = (updatedItem) => {
    setEditItem(null);
    onItemUpdated(updatedItem);
  };
  return (
    <main>
     
        <section className="bg-white rounded-md shadow-md p-6"> 
          
          <div className="details__key__val">
            <label className="details__label">Name:</label> {name}
          </div>
          <div className="details__key__val">
            <label className="details__label">Magic Number:</label>{" "}
            {NumToWordsInt(mnumber)}
          </div>
          <div>
            <div className="text-xl font-medium text-black">Key Value Pairs</div>
            <hr />
            {keyVals.map(({ id, key, val }) => (
              <div key={id} className="details__key__val">
                <label className="details__label">{key}:</label> {val}
              </div>
            ))}
          </div>
        </section>
        <footer>
          <button className="button--round" onClick={() => setEditItem(widget)}>
            <span className="btn-emoji">✏️</span>
          </button>
          <EditModal
            editItem={editItem}
            onEditDone={onEditDone}
            closeMe={() => setEditItem(null)}
          />
        </footer>
 
    </main>
  );
};

export default Details;
