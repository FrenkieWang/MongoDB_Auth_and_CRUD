import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props){

  return (
    <div className="container">
      <div>
        Welcome: <b style={{color:'red'}}>{props.userData.fname}&nbsp;{props.userData.lname}</b> !
      </div>
      <div>
        Your Email Address is : <b style={{color:'red'}}>{props.userData.email}</b>
      </div>
      <h4>Menu:</h4>      
      <Link to="/user-home">Exercises List</Link>
      <br/>
      <Link to="/user-home/create">Create Exercise Log</Link>
      <hr/>
    </div>
  );  
}

export default Navbar;