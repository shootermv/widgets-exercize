import React from "react";
import "./SideBarItem.css"

const SideBarItem = ({
  widget,
  setEditItem,
  setDeltItem,
  onSelect,
  selected,
}) => (
  <li key={widget.name} className={widget.name === selected ? "sidebar__item selected" : "sidebar__item"}>
    <div className="txt" onClick={() => onSelect(widget)}>
      {widget.name}
    </div>
    <nav className="sidebar__item__nav">
      <button className="edit__btn" onClick={() => setEditItem(widget)}>✏️</button>
      <button onClick={() => setDeltItem(widget)}>x</button>
    </nav>
  </li>
);

export default SideBarItem;
