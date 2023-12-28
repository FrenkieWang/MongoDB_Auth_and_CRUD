import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props){

  return (
    <nav className="navbar bg-light">
      <div>
        <h5>Name: {props.userData.fname} &nbsp; {props.userData.lname}</h5>
        <h5>Email: {props.userData.email}</h5>
      </div>
      <div className="collpase navbar-collapse">
      <button className="btn btn-danger">
         <Link to="/" className="nav-link">Exercises</Link>
      </button>
        <Link to="/" className="nav-link">Exercises</Link>
        <Link to="/user-home/create" className="nav-link">Create Exercise Log</Link>
      </div>
    </nav>
  );  
}

export default Navbar;