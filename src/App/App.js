import React, { useEffect, useState } from "react";
import "./App.css";
import Deatils from "./Details/Details";
import Sidebar from "./SideBar/SideBar";
import fetchStocks from "../api/fetchStocks";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [widgets, setWidgets] = useState([]);
  const [selectedWidget, setSelectedWidget] = useState(null);
  const deleteWidget = (_id) => {
    setWidgets(widgets.filter(({ id }) => _id !== id));
  }
  const onItemUpdated = (updatedItem) => {
    setWidgets(
      updatedItem.id === "new"
        ? [...widgets, { ...updatedItem, id: uuidv4() }]
        : widgets.map((item) =>
            updatedItem.id !== item.id ? item : updatedItem
          )
    );

    if (selectedWidget.id === updatedItem.id) {
      // must update details if currently selected
      setSelectedWidget(updatedItem);
    }
  }

  useEffect(() => {
    fetchStocks().then((data) => {
      setWidgets(data);
    });
  }, []);

  useEffect(() => {
    if (!widgets.length) {
      setSelectedWidget(null)
      return;
    }
    setSelectedWidget(widgets[widgets.length - 1]);
  }, [widgets.length]);

  return (
    <div className="App">
      {widgets.length ? (
        <Sidebar
          widgets={widgets}
          onSelect={setSelectedWidget}
          selected={selectedWidget?.name}
          deleteStock={deleteWidget}
          onItemUpdated={onItemUpdated}
        />
      ) : (
        <aside>Loading...</aside>
      )}
      <Deatils selected={selectedWidget} onItemUpdated={onItemUpdated} />
    </div>
  );
};

export default App;
