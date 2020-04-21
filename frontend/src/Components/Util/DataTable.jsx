import React from "react";
import { Link } from "react-router-dom";

const DataTable = (props) => {
  const row = props.data;

  return (
    <tr id={row.id}>
      <td>{row.id}</td>
      <td>{row.firstName}</td>
      <td>{row.lastName}</td>
      <td>{row.address}</td>
      <td>{row.gpa}</td>
      <td>{row.year}</td>
      <td>{row.graduation_date}</td>
      <td>${row.tuition_due}</td>
      <td>
        <div style={{ display: "inline-block" }}>
          <Link className="button is-primary" to={`/Modify/${row.id}`}>
            Update
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default DataTable;
