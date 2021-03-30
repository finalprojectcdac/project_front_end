import React, { useState } from "react";
import user from "../../../service/serviceLayer";
import { Link } from "react-router-dom";

function SetEmployeeForm() {
  const [empDetails, setEmpDetails] = useState({
    empId: "",
    name: "",
    password: "",
    email: "",
    privilege: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "empId" && value === "") {
      setEmpDetails({
        empId: "",
        name: "",
        password: "",
        email: "",
        privilege: "",
      });
    } else {
      setEmpDetails((prevValue) => {
        return { ...prevValue, [name]: value };
      });
    }
  }

  function clearForm() {
    setEmpDetails({
      empId: "",
      name: "",
      password: "",
      email: "",
      privilege: "",
    });
  }

  function handleBlur(event) {
    const empId = event.target.value;

    if (empId !== "") {
      console.log("handle blur called with: " + empId);
      user.getEmployeeDetails(empId).then((resp) => {
        const status = resp.data.status;
        console.log(status);
        if (status === 1) {
          const {
            empId,
            name,
            password,
            email,
            privilege,
          } = resp.data.employee;
          if (privilege === "NOT SET") {
            setEmpDetails({
              empId: empId,
              name: name,
              password: password,
              email: email,
              privilege: "",
            });
          } else {
            setEmpDetails({
              empId: empId,
              name: name,
              password: password,
              email: email,
              privilege: privilege,
            });
          }
        } else {
          setEmpDetails({
            empId: empId,
            name: "",
            password: "",
            email: "",
            privilege: "",
          });
        }
      });
    }
  }

  function handleUpdate() {
    if (empDetails.empId !== "") {
      user.updateEmployeeDetails(empDetails).then((resp) => {
        const { status, reason } = resp.data;
        console.log(status);
        console.log(reason);
      });
      setEmpDetails({
        empId: "",
        name: "",
        password: "",
        email: "",
        privilege: "",
      });
      window.location.reload();
    } else {
      console.log("Empty Object");
    }
  }

  return (
    <div className="set-employee-form crd">
      <div style={{ height: "50px" }}>
        <p
          className="text-color"
          style={{ textAlign: "center", paddingTop: "0px", paddingTop: "10px" }}
        >
          Update Employee Details
        </p>
        <Link to="/monitoring/checkemployees">
          <button
            className="btn btn-inv btn-success btn-sm"
            style={{ position: "relative", left: "1000px", top: "-61px" }}
          >
            <b>CLOSE</b>
          </button>
        </Link>
      </div>
      <form style={{ width: "50%" }}>
        <div
          className="form-row"
          style={{ width: "200%", paddingLeft: "30px" }}
        >
          <div className="form-group col-md-3">
            <label for="empId">Employee ID</label>
            <input
              type="text"
              class="form-control"
              id="empId"
              placeholder="Employee ID"
              name="empId"
              onBlur={handleBlur}
              onChange={handleChange}
              value={empDetails.empId}
            />
          </div>
          <div class="form-group col-md-3">
            <label for="fName">Full Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Full Name"
              name="name"
              onChange={handleChange}
              value={empDetails.name}
            />
          </div>
          <div className="form-group col-md-3">
            <label for="state">Email ID</label>
            <input
              type="text"
              class="form-control"
              id="email"
              placeholder="Email ID"
              name="email"
              onChange={handleChange}
              value={empDetails.email}
            />
          </div>
          <div class="form-group col-md-3">
            <label for="privilege">Privilege</label>
            <input
              list="privileges"
              class="form-control"
              id="privilege"
              placeholder="Privilege"
              name="privilege"
              onChange={handleChange}
              value={empDetails.privilege}
            />
            <datalist id="privileges">
              <option value="ADMIN" />
              <option value="LIMITED USER" />
            </datalist>
          </div>
        </div>
      </form>
      <div style={{ position: "absolute", left: "900px", bottom: "34px" }}>
        <button
          class="btn btn-success btn-inv"
          type="submit"
          onClick={handleUpdate}
        >
          UPDATE
        </button>
        <button
          class="btn btn-success btn-inv"
          type="submit"
          onClick={clearForm}
        >
          CLEAR
        </button>
      </div>
    </div>
  );
}

export default SetEmployeeForm;
