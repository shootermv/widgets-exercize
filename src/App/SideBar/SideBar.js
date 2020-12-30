import React, { useState } from "react";
import "./SideBar.css";

import EditModal from "../Modals/EditModal";
import DeleteModal from "../Modals/DeleteModal";
import SideBarItem from "./SideBarItem/SideBarItem";

const Sidebar = ({
  widgets,
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
        {widgets.map((widget) => (
          <SideBarItem key={widget.id} {...{ widget, setEditItem, onSelect, selected, setDeltItem }} />
        ))}
      </ul>
      <div className="add-btn-wrap">
        <button className="button--round"
          onClick={() =>
            setEditItem({ id: "new", name: "", mnumber: 0, keyVals: [] })
          }
        >
          +
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
