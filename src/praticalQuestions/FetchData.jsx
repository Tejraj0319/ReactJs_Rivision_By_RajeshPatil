import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const handleSearch = () => {
    const result = title.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase()),
    );
    setFilterData(result);
    setSearch("");
  };

  useEffect(() => {
    const data = fetch("https://dummyjson.com/products");
    data
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setTitle(res.products);
        setFilterData(res.products);
      });
  }, []);
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Title"
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {filterData.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
