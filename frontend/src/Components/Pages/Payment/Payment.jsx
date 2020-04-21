import React, { useState, useEffect } from "react";
import axios from "axios";

const Payment = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [gpa, setGpa] = useState("");
  const [year, setYear] = useState("");
  const [graduationDate, setGraduationData] = useState("");
  const [tuition, setTuition] = useState(0);
  const [payment, setPayment] = useState(0);
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
  }, [id]);

  const handlePayment = () => {
    const newTuition = tuition - payment;
    const student = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      gpa: gpa,
      year: year,
      graduation_date: graduationDate,
      tuition_due: newTuition,
    };
    axios
      .put(`/api/students/${id}`, student)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
    alert("Payment Processed!!");
    props.history.goBack("/");
  };

  return (
    <div className="container box">
      <div className="title">Tuition Amount: ${tuition}</div>
      <div className="rows is-vcentered">
        <form action="">
          <div className="row is-half">
            <div className="control">
              <label>How much would you like to pay?</label>
              <input
                className=" input"
                type="text"
                value={payment}
                placeholder="199.99"
                onChange={(e) => setPayment(e.target.value)}
              />
            </div>
          </div>
          <div column>
            <button
              className="button bd-notification is-primary row"
              onClick={() => handlePayment()}
            >
              Make Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
