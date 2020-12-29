import React, { useEffect, useState } from "react";
import "./App.css";
import Deatils from "./Details";
import Sidebar from "./SideBar";
import fetchStocks from "../api/fetchStocks";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [stocks, setStocks] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);
  function deletStock(_id) {
    setStocks(stocks.filter(({ id }) => _id !== id));
  }
  function onItemUpdated(updatedItem) {
    setStocks(
      updatedItem.id === "new"
        ? [...stocks, { ...updatedItem, id: uuidv4() }]
        : stocks.map((item) =>
            updatedItem.id !== item.id ? item : updatedItem
          )
    );

    if (selectedStock.id === updatedItem.id) {
      // must update details if currently selected
      setSelectedStock(updatedItem);
    }
  }

  useEffect(() => {
    fetchStocks().then((data) => {
      setStocks(data);
    });
  }, []);

  useEffect(() => {
    if (!stocks.length) return;
    setSelectedStock(stocks[stocks.length - 1]);
  }, [stocks.length]);
  return (
    <div className="App">
      {stocks.length ? (
        <Sidebar
          stocks={stocks}
          onSelect={setSelectedStock}
          selected={selectedStock?.name}
          deleteStock={deletStock}
          onItemUpdated={onItemUpdated}
        />
      ) : (
        <aside>Loading...</aside>
      )}
      <Deatils selected={selectedStock} onItemUpdated={onItemUpdated} />
    </div>
  );
};

export default App;
