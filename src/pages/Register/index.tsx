import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./register.scss";

const Register: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = async () => {
    navigate("/userLogin");
  };

  return (
    <div className="container">
      <header className="header">
        <h3> Create your account</h3>
      </header>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister();
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

        <button onClick={handleRegister} className="button">
          Register <img src="src/icons/arrow.png" alt="->" />
        </button>
        <div className="footer">
          <p>Already have an account?</p>
          <Link to="/userLogin">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
