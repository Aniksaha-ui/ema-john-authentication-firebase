import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
    // console.log("Login Processing for", email, password);
  };

  if (user) {
    navigate("/");
  }

  return (
    <div className="registration-form">
      {loading ? (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <>
          <form onSubmit={handleLogin}>
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
                type="submit"
                value="Login"
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
        </>
      )}
    </div>
  );
};

export default Login;
