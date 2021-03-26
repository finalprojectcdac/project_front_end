import React, { useState } from "react";
import auth from "../../auth-directory/auth";
import { useHistory } from "react-router-dom";
import user from "../../service/serviceLayer";

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
          auth.login(() => {
            history.push("/inventory");
          });
        } else if (status === -2) {
          alert("User not registered");
        } else {
          alert("Incorrect password.");
        }
      });
    } else {
      alert("Enter credentials");
    }
    event.preventDefault();
  }

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={loginDetails.username}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={loginDetails.password}
            onChange={handleChange}
          />
        </form>
        <button onClick={handleLogin}>login</button>
      </div>
    </div>
  );
}

export default Login;
