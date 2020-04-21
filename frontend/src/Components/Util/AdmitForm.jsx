import React, { useState } from "react";
import axios from "axios";

const AdmitForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [gpa, setGpa] = useState(0);
  const [year, setYear] = useState("");
  const [graduationDate, setGraduationData] = useState("");
  const [tuition, setTuition] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      gpa: gpa,
      year: year,
      graduation_date: graduationDate,
      tuition_due: tuition,
    };
    console.log(student);

    axios
      .post("/api/students", student)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
    alert("Student Admitted");
    props.path.history.goBack("/");
  };
  return (
    <div>
      <form
        className="container box"
        action=""
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="field">
          <p className="control has-icons-right">
            <label>First Name</label>
            <input
              className="input"
              value={firstName}
              type="text"
              required
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <label>Last Name</label>
            <input
              className="input"
              value={lastName}
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <label>Address</label>
            <input
              className="input"
              value={address}
              type="text"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <label>GPA</label>
            <input
              className="input"
              value={gpa}
              type="number"
              required
              placeholder="GPA"
              onChange={(e) => setGpa(e.target.value)}
            />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <label>Year</label>
            <input
              className="input"
              value={year}
              type="text"
              placeholder="Senior"
              onChange={(e) => setYear(e.target.value)}
            />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <label>Year of Graduation</label>
            <input
              className="input"
              value={graduationDate}
              type="text"
              placeholder="YYYY-MM-DD"
              onChange={(e) => setGraduationData(e.target.value)}
            />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <label>Tuition Due</label>
            <input
              className="input"
              value={tuition}
              type="number"
              placeholder="99999"
              onChange={(e) => setTuition(e.target.value)}
            />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-success">Admit</button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default AdmitForm;
