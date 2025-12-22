import React from "react";

const Grid = () => {
  const container = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", 
    gap: "15px",
    padding: "20px",
    maxWidth: "1200px", // keeps layout centered on large screens
    width: "100%",
  };

  const box = {
    backgroundColor: "lightblue",
    border: "2px solid #333",
    textAlign: "center",
    padding: "20px",
    fontSize: "20px",
  };

  const circle = {
    height: "140px",
    width: "140px",
    backgroundColor: "red",
    borderRadius: "50%",
    margin: "0 auto", // keeps circles centered inside the grid cell
  };

  return (
    <div style={container}>
      <div style={gridStyle}>
        <div style={box}>1</div>
        <div style={box}>2</div>
        <div style={box}>3</div>
        <div style={box}>4</div>
        <div style={box}>5</div>
        <div style={box}>6</div>
        <div style={circle}></div>
        <div style={circle}></div>
        <div style={circle}></div>
      </div>
    </div>
  );
};

export default Grid;
