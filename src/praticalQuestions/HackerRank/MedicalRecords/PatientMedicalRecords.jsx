import React, { useState } from "react";
import Search from "./Search";
import Records from "./Records";

const PatientMedicalRecords = () => {
  const [record, setRecord] = useState(null);
  const [id, setId] = useState(null);
  return (
    <div>
      <Search setRecord={setRecord} setId={setId} />
      <Records record={record} id={id} setRecord={setRecord} setId={setId} />
    </div>
  );
};

export default PatientMedicalRecords;
