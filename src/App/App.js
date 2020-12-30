import React, { useEffect, useState } from "react";
import "./App.css";
import Deatils from "./Details/Details";
import Sidebar from "./SideBar/SideBar";
import fetchStocks from "../api/fetchWdigets";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [loading, setLoading] = useState(false);
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

    if (selectedWidget?.id === updatedItem.id) {
      // must update details of currently selected
      setSelectedWidget(updatedItem);
    }
  }

  useEffect(() => {
    setLoading(true)
    fetchStocks().then((data) => {
      setWidgets(data);
      setLoading(false);
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
      {loading && <aside>Loading...</aside>}
      {!loading && (
        <Sidebar
          widgets={widgets}
          onSelect={setSelectedWidget}
          selected={selectedWidget?.name}
          deleteStock={deleteWidget}
          onItemUpdated={onItemUpdated}
        />
      )}
      
      <Deatils selected={selectedWidget} onItemUpdated={onItemUpdated} />
    </div>
  );
};

export default App;
