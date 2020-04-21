import React, { useState, useEffect } from "react";

import DataTable from "../../Util/DataTable";
import useFetch from "../../DataFetchers/useFetch";

const SearchPage = (props) => {
  const { students, isLoading } = useFetch("/api/students");
  const [search, setSearch] = useState("");
  const [filteredStudents, setFilteredStudents] = useState();

  useEffect(() => {
    const implementSearch = () => {
      setFilteredStudents(
        students.filter((student) => {
          return student.firstName.toLowerCase().includes(search.toLowerCase());
        })
      );
    };
    implementSearch();
  }, [search, students]);

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
                  <th>GPA</th>
                  <th>Year</th>
                  <th>Graduation Date</th>
                  <th>Tuition Due</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((rowData) => (
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
