import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props){

  return (
    <nav className="navbar bg-light">
      <label>User Information:</label>
      <div>
        <h5>Name: {props.userData.fname} &nbsp; {props.userData.lname}</h5>
        <h5>Email: {props.userData.email}</h5>
      </div>
      <hr></hr>
       <p>Menu:</p>
      <Link to="/" className="nav-link">Exercises</Link>
      <br/>
      <Link to="/user-home/create" className="nav-link">Create Exercise Log</Link>
    </nav>
  );  
}

export default Navbar;