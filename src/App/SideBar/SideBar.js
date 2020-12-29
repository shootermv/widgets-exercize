import React, { useState } from "react";
import "./SideBar.css";

import EditModal from "../Modals/EditModal";
import DeleteModal from "../Modals/DeleteModal";
import SideBarItem from "./SideBarItem/SideBarItem";


const Sidebar = ({
  stocks,
  onSelect,
  selected,
  deleteStock,
  onItemUpdated,
}) => {
  const [deltItem, setDeltItem] = useState(null);
  const [editItem, setEditItem] = useState(null);
  const onEditDone = (updatedItem) => {
    setEditItem(null);
    onItemUpdated(updatedItem);
  };
  return (
    <aside>
      <ul>
        {stocks.map((widget) => (
          <SideBarItem {...{ widget, setEditItem, onSelect, selected, setDeltItem }} />
        ))}
      </ul>
      <div className="add-btn-wrap">
        <button
          onClick={() =>
            setEditItem({ id: "new", name: "", mnumber: 0, keyVals: [] })
          }
        >
          add
        </button>
      </div>

      <EditModal
        editItem={editItem}
        onEditDone={onEditDone}
        closeMe={() => setEditItem(null)}
      />

      <DeleteModal
        deltItem={deltItem}
        onDeleteDone={(id) => {
          deleteStock(id);
          setDeltItem(null);
        }}
        closeMe={() => setDeltItem(null)}
      />
    </aside>
  );
};

export default Sidebar;
