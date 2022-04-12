import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(email, password, confirmPassword);
    if (password !== confirmPassword) {
      toast("password are must be same");
      return;
    }
    if (password.length < 6) {
      toast("Password must be atleast 6 char");
      return;
    }

    createUserWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate("/");
  }

  return (
    <div className="registration-form">
      <form onSubmit={handleFormSubmit}>
        <div className="form-icon">
          <span>
            <i className="icon icon-user"></i>
          </span>
        </div>

        <div className="form-group">
          <input
            onBlur={handleEmail}
            type="text"
            className="form-control item"
            id="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="form-group">
          <input
            onBlur={handlePassword}
            type="password"
            className="form-control item"
            id="password"
            placeholder="Password"
            required
          />
        </div>

        <div className="form-group">
          <input
            onBlur={handleConfirmPassword}
            type="confirmPassword"
            className="form-control item"
            id="confirmPassword"
            placeholder="Confirm Password"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create New User"
            className="btn btn-block create-account"
          />
        </div>
        <br />
      </form>
      <div className="social-media">
        <h5>Sign up with social media</h5>
        <div className="social-icons">
          <Link to="/">
            <i className="icon-social-facebook" title="Facebook"></i>
          </Link>
          <Link to="">
            <button
              className="icon-social-google border-0"
              title="Google"
            ></button>
          </Link>
          <Link to="#">
            <i className="icon-social-twitter" title="Twitter"></i>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
