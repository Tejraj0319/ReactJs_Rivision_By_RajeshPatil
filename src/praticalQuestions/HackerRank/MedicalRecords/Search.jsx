import React, { useState } from "react";
import medical_record from "./medicalRecords";

const Search = ({ setRecord, setId }) => {
  const [selectId, setSelectId] = useState("0");

  const handleShow = () => {
    if (selectId === "0") {
      alert("Select the patient");
      return;
    }

    const patient = medical_record.find((item) => item.id === Number(selectId));

    setRecord(patient);
    setId(Number(selectId));
  };

  return (
    <div>
      <select onChange={(e) => setSelectId(e.target.value)}>
        <option value="0">Select Patient</option>

        {medical_record.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>

      <button onClick={handleShow}>Show</button>
    </div>
  );
};

export default Search;
