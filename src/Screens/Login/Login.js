import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <form className="loginForm">
        <h1>LOGIN</h1>
        <div className="login">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Email" />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Password" />
          <div className="forgotPassword">
            <a>Forgot Password</a>
          </div>
          <button>SUBMIT</button>
        </div>
      </form>
      <div className="registerSection">
        <p>New User ?</p>
        <Link to="/register">CREATE AN ACCOUNT</Link>
      </div>
    </div>
  );
};

export default Login;
