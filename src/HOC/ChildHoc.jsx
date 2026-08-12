import React from "react";

const ChildHoc = ({ user }) => {
  return (
    <div>
      <ul>
        {user.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChildHoc;
