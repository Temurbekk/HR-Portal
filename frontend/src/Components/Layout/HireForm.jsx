import React, { useState } from "react";
import axios from "axios";

const HireForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const employee = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      phone_no: number,
      salary: salary,
      emailId: email,
    };
    console.log(employee);

    axios
      .post("/api/v1/employees/", employee)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
    alert("Employee Hired");
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
            <label>Email Address</label>
            <input
              className="input"
              value={email}
              type="email"
              required
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <label>Phone Number</label>
            <input
              className="input"
              value={number}
              type="number"
              placeholder="Phone Number"
              onChange={(e) => setNumber(e.target.value)}
            />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <label>Salary</label>
            <input
              className="input"
              value={salary}
              type="number"
              placeholder="Salary"
              onChange={(e) => setSalary(e.target.value)}
            />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-success">Hire</button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default HireForm;
