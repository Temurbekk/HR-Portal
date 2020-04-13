import React, { useState, useEffect } from "react";

import DataTable from "../../Layout/DataTable";
import useFetch from "../../DataFetchers/useFetch";

const SearchPage = (props) => {
  const { employees, isLoading } = useFetch("/api/v1/employees/");
  const [search, setSearch] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState();

  useEffect(() => {
    setFilteredEmployees(
      employees.filter((employee) => {
        return employee.firstName.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, employees]);

  return (
    <div>
      <div>
        {isLoading ? (
          <div>...Loading </div>
        ) : (
          <div className="container box">
            <table className="table is-hoverable is-fullwidth">
              <thead>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
                <tr>
                  <th>Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Address</th>
                  <th>Email Address</th>
                  <th>Phone Number</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((rowData) => (
                  <DataTable path={props} key={rowData.id} data={rowData} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
//http://localhost:8080/api/v1/person
