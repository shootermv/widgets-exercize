import React, { useState, useEffect } from "react";

import EditModal from "./EditModal";
import "./Details.css";

import { NumToWordsInt } from "../api/utils";
const Details = ({ selected: stock, onItemUpdated }) => {
  const [editItem, setEditItem] = useState(null);

  if (!stock) return <main>Select some stock</main>;
  const { name, mnumber, id, keyVals } = stock;
  const onEditDone = updatedItem => {
    setEditItem(null);
    onItemUpdated(updatedItem);
  }
  return (
    <main>
      <>
        <section>
          <div>name: {name}</div>
          <div>magic number: {NumToWordsInt(mnumber)}</div>
          <div>
            keyVals:
            {keyVals.map(({ key, val }) => (
              <div key={key}>
                {key}: {val}
              </div>
            ))}
          </div>
        </section>
        <div>
          <button onClick={() => setEditItem(stock)}>edit</button>
          {editItem && (
            <EditModal editItem={editItem} onEditDone={onEditDone} closeMe={() => setEditItem(null)}/>
          )}
        </div>
      </>
    </main>
  );
};

export default Details;
