import React, { useState } from "react";
import user from "../../../service/serviceLayer";
import { Link } from "react-router-dom";

function SetEmployeeForm() {
  const [empDetails, setEmpDetails] = useState({
    empId: "",
    fName: "",
    lName: "",
    password: "",
    dob: "",
    dateOfJoining: "",
    state: "",
    privilege: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "empId" && value === "") {
      setEmpDetails({
        empId: "",
        fName: "",
        lName: "",
        password: "",
        dob: "",
        dateOfJoining: "",
        state: "",
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
      fName: "",
      lName: "",
      password: "",
      dob: "",
      dateOfJoining: "",
      state: "",
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
            fName,
            lName,
            password,
            dob,
            dateOfJoining,
            state,
            privilege,
          } = resp.data.employee;
          setEmpDetails({
            empId: empId,
            fName: fName,
            lName: lName,
            password: password,
            dob: dob,
            dateOfJoining: dateOfJoining,
            state: state,
            privilege: privilege,
          });
        } else {
          setEmpDetails({
            empId: empId,
            fName: "",
            lName: "",
            password: "",
            dob: "",
            dateOfJoining: "",
            state: "",
            privilege: "",
          });
        }
      });
    }
  }

  function handleUpdate() {
    if (empDetails.empId !== "") {
      user.setEmployeeDetails(empDetails).then((resp) => {
        const { status, reason } = resp.data;
        console.log(status);
        console.log(reason);
      });
      setEmpDetails({
        empId: "",
        fName: "",
        lName: "",
        password: "",
        dob: "",
        dateOfJoining: "",
        state: "",
        privilege: "",
      });
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
          Create/Update Employee Details
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
            <label for="fName">First Name</label>
            <input
              type="text"
              class="form-control"
              id="fName"
              placeholder="First Name"
              name="fName"
              onChange={handleChange}
              value={empDetails.fName}
            />
          </div>
          <div class="form-group col-md-3">
            <label for="lName">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="lName"
              placeholder="Last Name"
              name="lName"
              onChange={handleChange}
              value={empDetails.lName}
            />
          </div>
          <div className="form-group col-md-3">
            <label for="dob">Date of Birth</label>
            <input
              type="date"
              class="form-control"
              id="dob"
              placeholder="Date of Birth"
              name="dob"
              onChange={handleChange}
              value={empDetails.dob}
            />
          </div>
        </div>
        <div
          className="form-row"
          style={{ width: "200%", paddingLeft: "30px" }}
        >
          <div class="form-group col-md-3">
            <label for="dateOfJoining">Date of Joining</label>
            <input
              type="date"
              class="form-control"
              id="dateOfJoining"
              placeholder="Date of Joining"
              name="dateOfJoining"
              onChange={handleChange}
              value={empDetails.dateOfJoining}
            />
          </div>
          <div className="form-group col-md-3">
            <label for="state">State</label>
            <input
              type="text"
              class="form-control"
              id="state"
              placeholder="State"
              name="state"
              onChange={handleChange}
              value={empDetails.state}
            />
          </div>
          <div class="form-group col-md-3">
            <label for="privilege">Privilege</label>
            <input
              type="text"
              class="form-control"
              id="privilege"
              placeholder="Privilege"
              name="privilege"
              onChange={handleChange}
              value={empDetails.privilege}
            />
          </div>
        </div>
      </form>
      <div style={{ position:"absolute", left:"900px", bottom:"34px"}}>
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
