import React from "react";
import "./Table.css";
const TableRow = ({
  user,
  selected
}) => {
  return (
    <tr className={selected ? "selected" : ""}>
     
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
     
    </tr>
  );
};

export default TableRow;
