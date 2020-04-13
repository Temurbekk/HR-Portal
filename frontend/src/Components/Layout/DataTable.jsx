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
      <td>{row.emailId}</td>
      <td>{row.phone_no}</td>
      <td>${row.salary}</td>
      <td>
        <Link className="button is-primary" to={`/Modify/${row.id}`}>
          Update
        </Link>
      </td>
    </tr>
  );
};

export default DataTable;
