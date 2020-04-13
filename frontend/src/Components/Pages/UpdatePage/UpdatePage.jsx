import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdatePage = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [salary, setSalary] = useState("");
  const id = props.match.params.id;

  useEffect(() => {
    axios
      .get(`/api/v1/employees/${id}`)
      .then((response) => {
        setLastName(() => response.data.lastName);
        setFirstName(() => response.data.firstName);
        setAddress(() => response.data.address);
        setEmail(() => response.data.emailId);
        setSalary(() => response.data.salary);
        setNumber(() => response.data.phone_no);
      })
      .catch((error) => console.log(error));
  }, [id, props]);

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
  };

  const handleUpdate = () => {
    const employee = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      phone_no: number,
      salary: salary,
      emailId: email,
    };
    axios
      .put(`/api/v1/employees/${id}`, employee)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
    alert("Employee Information Updated!!");
    props.history.goBack("/");
  };

  const handleFire = () => {
    axios
      .delete(`/api/v1/employees/${id}`)
      .then((res) => console.log(res.data));
    alert("Employee Fired");
    props.history.goBack("/");
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
          <p className="buttons">
            <button
              onClick={() => handleUpdate()}
              className="button is-success"
            >
              Update Employee
            </button>
            <button onClick={() => handleFire()} className="button is-danger">
              Fire Employee
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default UpdatePage;
