import React from "react";
import "./SideBarItem.css"

const SideBarItem = ({
  widget,
  setEditItem,
  setDeltItem,
  onSelect,
  selected,
}) => (
  <li key={widget.name} className={`flex rounded-md sidebar__item ${widget.name === selected ? "selected" : ""}`}>
    <div className="txt" onClick={() => onSelect(widget)}>
      {widget.name}
    </div>
    <nav className="sidebar__item__nav">
      <button onClick={() => setEditItem(widget)}><span className="btn-emoji">✏️</span></button>
      <button onClick={() => setDeltItem(widget)}>x</button>
    </nav>
  </li>
);

export default SideBarItem;
