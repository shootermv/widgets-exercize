import React, { useState } from "react";
import "./SideBar.css";

import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
const Sidebar = ({ stocks, select, selected, deleteStock }) => {
  const [deltItem, setDeltItem] = useState(null);
  const [editItem, setEditItem] = useState(null);
  return (
    <aside>
      <ul>
        {stocks.map((stock) => (
          <li
            key={stock.name}
            className={stock.name === selected ? "selected" : ""}
          >
            <div className="txt" onClick={() => select(stock)}>
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
      {editItem && <EditModal editItem={editItem} setEditItem={setEditItem} />}
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
