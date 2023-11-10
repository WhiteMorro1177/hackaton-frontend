import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    // send request here

    localStorage.setItem("username", inputUsername);
    navigate("/tasks");
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
