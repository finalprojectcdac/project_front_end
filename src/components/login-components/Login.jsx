import React, { useState } from "react";
import auth from "../../auth-directory/auth";
import { Link, useHistory } from "react-router-dom";
import user from "../../service/serviceLayer";
import Alert from "react-s-alert";

function Login() {
  let history = useHistory();
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setLoginDetails((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function handleLogin(event) {
    if (loginDetails.username !== "" && loginDetails.password !== "") {
      user.login(loginDetails.username, loginDetails.password).then((resp) => {
        const status = resp.data.status;
        console.log(status);
        if (status === 1) {
          const { privilege } = resp.data.employee;
          if (privilege === "ADMIN") {
            auth.setAdmin();
            const a = auth.isPrivileged();
            console.log(a);
            auth.login(() => {
              history.push("/welcome");
            });
            Alert.success("Logged in successfully!!");
          } else if (privilege === "LIMITED USER") {
            auth.unsetAdmin();
            console.log("hello");
            auth.login(() => {
              history.push("/welcome");
            });
          } else {
            Alert.error("Not approved for login yet. Contact administrator!");
          }
        } else if (status === -2) {
          Alert.error("User not registered!");
        } else {
          Alert.error("Incorrect password.");
        }
      });
    } else {
      Alert.error("Please enter your credentials");
    }
    event.preventDefault();
  }

  return (
    <div className="login-page">
      <div className="form">
        <h3 style={{ fontFamily: "merriWeather", color: "#2A9D8F" }}>Login</h3>
        <form className="login-form">
          <input
            class="form-control"
            type="text"
            placeholder="Username"
            name="username"
            value={loginDetails.username}
            onChange={handleChange}
          />
          <input
            class="form-control"
            type="password"
            placeholder="Password"
            name="password"
            value={loginDetails.password}
            onChange={handleChange}
          />
        </form>
        <button onClick={handleLogin}>login</button>
        <br></br>
        <br></br>
        <p>
          Not registered yet?
          <Link to="/register"> Click here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
