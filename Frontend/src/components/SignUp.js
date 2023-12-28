import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fname, lname, email, password);

    axios.post("http://localhost:5000/user/register",{
      fname,
      lname,
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
      if(response.data.status == "ok"){
        alert("Registration Successful");
      } else {
        alert("Something went wrong");
      }
    })
    .catch(error => {
      console.log("There was an error!", error);
    });   
  };

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <div  className="form-group">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
          <div  className="form-group">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
          <div  className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div  className="form-group">
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
              Sign Up
            </button>
          </div>
          <p className="form-group">
            Already registered <Link to={"/sign-in"}><b>Sign in?</b></Link>
          </p>
        </form>
    </div>
  );
}
export default SignUp;
