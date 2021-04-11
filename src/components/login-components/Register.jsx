import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../service/serviceLayer";
import Alert from "react-s-alert";

function Register() {
  const [empDetails, setEmpDetails] = useState({
    empId: "",
    name: "",
    email: "",
    password: "",
    privilege: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setEmpDetails((prevValue) => {
      return { ...prevValue, [name]: value };
    });
    if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  }

  function handleRegister() {
    let isAlreadyRegistered = false;
    if (
      empDetails.name !== "" &&
      empDetails.email !== "" &&
      empDetails.password !== "" &&
      confirmPassword !== ""
    ) {
      user.getListOfEmployees().then((resp) => {
        for (let i = 0; i < resp.data.empList.length; i++) {
          if (resp.data.empList[i].email === empDetails.email) {
            isAlreadyRegistered = true;
            break;
          }
        }
        // console.log(isAlreadyRegistered);

        if (isAlreadyRegistered) {
          Alert.error("This email ID is already in use!");
        } else {
          // console.log(isAlreadyRegistered);
          if (confirmPassword === empDetails.password) {
            user.registerEmployee(empDetails).then((resp) => {
              const { status, reason } = resp.data;
              if (status === 1) Alert.success(reason);
            });
            setEmpDetails({
              empId: "",
              name: "",
              email: "",
              password: "",
              privilege: "",
            });
            setConfirmPassword("");
          } else {
            Alert.error("Passwords don't match!");
          }
        }
      });
    } else {
      Alert.error("All fields are required!");
    }
  }

  return (
    <div className="login-page">
      <div className="form">
        <h3 style={{ fontFamily: "merriWeather", color: "#2A9D8F" }}>
          Register
        </h3>
        <form className="login-form">
          <input
            class="form-control"
            type="text"
            placeholder="Full Name"
            name="name"
            onChange={handleChange}
            value={empDetails.name}
          />
          <input
            class="form-control"
            type="email"
            placeholder="Email ID"
            name="email"
            onChange={handleChange}
            value={empDetails.email}
          />
          <input
            class="form-control"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={empDetails.password}
          />
          <input
            class="form-control"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={handleChange}
            value={confirmPassword}
          />
        </form>
        <button onClick={handleRegister}>register</button>
        <br></br>
        <br></br>
        <p>
          Already registered?
          <Link to="/login"> Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
