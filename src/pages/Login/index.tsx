import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./login.scss";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    navigate("/home");
  };

  return (
    <>
      <div className="container">
        <header className="header">
          <h3>Login</h3>
        </header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div className="inputContainer">
            <label htmlFor="email">Mail</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="johndoe@gmail.com"
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="********************"
            />
          </div>

          <button type="submit" className="button">
            Login <img src="src/icons/arrow.png" alt="->" />
          </button>
          <div className="footer">
            <p>Don't you have an account?</p>
            <Link to="/userRegister">Sign in</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
