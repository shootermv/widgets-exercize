import React, { useState } from "react";

import EditModal from "../Modals/EditModal";
import "./Details.css";

import { NumToWordsInt } from "../../api/utils";
const Details = ({ selected: widget, onItemUpdated }) => {
  const [editItem, setEditItem] = useState(null);

  if (!widget) return <main>Select some widget</main>;
  const { name, mnumber, id, keyVals } = widget;
  const onEditDone = (updatedItem) => {
    setEditItem(null);
    onItemUpdated(updatedItem);
  };
  return (
    <main>
      <>
        <section>
          <div><b>name:</b> {name}</div>
          <div><b>magic number:</b> {NumToWordsInt(mnumber)}</div>
          <div>
            <h4>Key Value Pairs</h4>
            <hr/>
            {keyVals.map(({ id, key, val }) => (
              <div key={id}>
                {key}: {val}
              </div>
            ))}
          </div>
        </section>
        <div>
          <button onClick={() => setEditItem(widget)}>edit</button>
          <EditModal
            editItem={editItem}
            onEditDone={onEditDone}
            closeMe={() => setEditItem(null)}
          />
        </div>
      </>
    </main>
  );
};

export default Details;
