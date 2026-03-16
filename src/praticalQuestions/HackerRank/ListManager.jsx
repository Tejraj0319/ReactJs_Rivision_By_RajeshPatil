import React, { useState } from "react";

const ListManager = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim() === "") return;
    setItems([...items, input]);
    setInput("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          List Manager
        </h1>
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter item..."
            className="flex-1 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button onClick={addItem} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Add</button>
        </div>
        <ul className="space-y-2">
          {items.map((data, index) => (
            <li key={index}  className="bg-blue-300 px-4 py-2 rounded-lg shadow-sm">{data}</li>
          ))}
        </ul>
      </div>
    </div>
  ); 
};

export default ListManager;
