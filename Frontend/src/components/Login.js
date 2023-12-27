import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    
    axios.post("http://localhost:5000/user/login-user", {
      email,
      password,
    }, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then(response => {
      console.log(response.data, "userRegister");
      if (response.data.status == "ok") {
        alert("login successful");
        window.localStorage.setItem("token", response.data.data);
        window.localStorage.setItem("loggedIn", true);
        // Only if Auth succeed, then routes to Home Page.
        window.location.href = "./user-home";
      }
      else{
        alert(response.data.error);
      }
    })
    .catch(error => {
      console.error("There was an error!", error);
    });
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            <Link to={"/sign-up"}><b>Sign Up</b></Link> 
          </p>
        </form>
      </div>
    </div>
  );
}
export default Login;
