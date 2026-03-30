import React from "react";
import medical_record from "./medicalRecords";

const Records = ({ record, id, setRecord, setId }) => {
  if (!record) return null;
  const handleNext = () => {
    let nextId = id + 1;
    if (nextId > medical_record.length) {
      nextId = 1;
    }
    const nextPatient = medical_record.find((item) => item.id === nextId);
    setRecord(nextPatient);
    setId(nextId);
  };
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Diagnosis</th>
            <th>Medications</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{record.id}</td>
            <td>{record.name}</td>
            <td>{record.age}</td>
            <td>{record.diagnosis}</td>
            <td>{record.medications.join(", ")}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Records;
