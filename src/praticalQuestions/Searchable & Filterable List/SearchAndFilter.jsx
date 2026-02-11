import React, { useState } from "react";
import data from "./data.json";

const SearchAndFilter = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filterData = data.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || item.category === category;
    return matchSearch && matchesCategory;
  });

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "400px",
      }}
    >
      {/* Search Input */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        style={{ width: "100%", marginBottom: "10px", padding: "3px" }}
      />

      {/* Filter Dropdown */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ width: "100%", marginBottom: "10px", padding: "3px" }}
      >
        <option>All</option>
        <option>Vegetable</option>
        <option>Fruit</option>
      </select>

      {/* listing data */}
      <ul>
        {filterData.length > 0 ? (
          filterData.map((item) => (
            <li key={item.id}>
              {item.name} - {item.category}
            </li>
          ))
        ) : (
          <p>No Data Found!</p>
        )}
      </ul>
    </div>
  );
};

export default SearchAndFilter;
