import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UpdatePage = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [gpa, setGpa] = useState(0);
  const [year, setYear] = useState("");
  const [graduationDate, setGraduationData] = useState("");
  const [tuition, setTuition] = useState(0);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchStudentFields = () => {
      axios
        .get(`/api/students/${id}`)
        .then((response) => {
          setFirstName(() => response.data.firstName);
          setLastName(() => response.data.lastName);
          setAddress(() => response.data.address);
          setGpa(() => response.data.gpa);
          setYear(() => response.data.year);
          setGraduationData(() => response.data.graduation_date);
          setTuition(() => response.data.tuition_due);
        })
        .catch((error) => console.log(error));
    };
    fetchStudentFields();
  }, [id, props]);

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
  };

  const handleUpdate = () => {
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
      .put(`/api/students/${id}`, student)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
    alert("Student Information Updated!!");
    props.history.goBack("/");
  };

  const handleExpel = () => {
    axios.delete(`/api/students/${id}`).then((res) => console.log(res.data));
    alert("Student Expelled");
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
              required
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
              required
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
              required
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
              type="text"
              placeholder="3000.00"
              onChange={(e) => setTuition(e.target.value)}
            />
          </p>
        </div>
        <div className="field">
          <p className="buttons">
            <Link
              to="/"
              onClick={() => handleUpdate()}
              className="button is-success"
            >
              Update Student
            </Link>
            <Link className="button is-primary" to={`/Pay/${id}`}>
              Make Payment
            </Link>
            <Link
              to="/"
              onClick={() => handleExpel()}
              className="button is-danger"
            >
              Expel Student
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default UpdatePage;
