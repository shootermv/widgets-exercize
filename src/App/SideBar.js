import React, { useState } from "react";
import "./SideBar.css";

import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
const Sidebar = ({ stocks, onSelect, selected, deleteStock,  onItemUpdated}) => {
  const [deltItem, setDeltItem] = useState(null);
  const [editItem, setEditItem] = useState(null);
  const onEditDone = updatedItem => {
    setEditItem(null);
    onItemUpdated(updatedItem);
  }
  return (
    <aside>
      <ul>
        {stocks.map((stock) => (
          <li
            key={stock.name}
            className={stock.name === selected ? "selected" : ""}
          >
            <div className="txt" onClick={() => onSelect(stock)}>
              {stock.name}
            </div>
            <nav>
              <button onClick={() => setEditItem(stock)}>e</button>
              <button onClick={() => setDeltItem(stock)}>x</button>
            </nav>
          </li>
        ))}
      </ul>
      <div className="add-btn-wrap">
        <button onClick={() => setEditItem({ id: "new", name: "" })}>
          add
        </button>
      </div>
      {editItem && <EditModal editItem={editItem} onEditDone={onEditDone} closeMe={() => setEditItem(null)}/>}
      {deltItem && (
        <DeleteModal
          deltItem={deltItem}
          setDeltItem={setDeltItem}
          deleteStock={deleteStock}
        />
      )}
    </aside>
  );
};

export default Sidebar;
