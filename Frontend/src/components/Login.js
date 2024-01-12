import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    
    axios.post("https://mern-stack-tutorial-backend.vercel.app/login-user", {
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
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Log In Page</h2>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit">
            Submit
          </button>
        </div>
        <p className="form-group">
          <Link to={"/sign-up"}><b>Sign Up</b></Link> 
        </p>
      </form>
    </div>
  );
}
export default Login;