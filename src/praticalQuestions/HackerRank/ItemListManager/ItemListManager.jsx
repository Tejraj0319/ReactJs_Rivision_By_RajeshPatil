// Without value: Browser controls UI.
// With value: React controls UI.

import React, { useState } from "react";
import "./itemListManager.css";

const ItemListManager = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (input.trim() === "") return;
    setItems([...items, input]);
    setInput("");
  };

  return (
    <div className="container">
      <h1>Item List Manager</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter Item"
      />
      <button onClick={addItem}>Add Item</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListManager;
