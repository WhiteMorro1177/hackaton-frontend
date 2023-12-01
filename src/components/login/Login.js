import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { logIn } from "../../http/sender";

import "./Login.css";

const Login = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    // send request here
    let token = null;
    logIn(inputUsername, inputPassword)
    .then(response => {
      token = response.data;
    });

    if (token == null) {
      alert("Invalid Credentials");
    }
    else {
      alert(token);
      localStorage.setItem("token", token);
      navigate("/tasks");
    }
  }

  return (
    <div className="login-form">
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="login-field">
          <input
            type="text"
            placeholder="Login"
            onChange={(event) => setInputUsername(event.target.value)}
          />
        </div>
        <div className="password-field">
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => setInputPassword(event.target.value)}
          />
        </div>
        <button className="login-button" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
