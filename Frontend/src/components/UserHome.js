import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import axios from 'axios';

import Navbar from "./Navbar"
import ExercisesList from "./ExercisesList";
import EditExercise from "./EditExercise";
import CreateExercise from "./CreateExercise";

function UserHome() {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    axios.post("http://localhost:5000/user/userData", {
      token: window.localStorage.getItem("token"),
    }, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    })
    .then(response => {
      console.log(response.data, "userData");
      setUserData(response.data.data);
  
      if (response.data.data === "token expired") {
        alert("Token expired login again");
        window.localStorage.clear();
        window.location.href = "./sign-in";
      }
    })
    .catch(error => {
      console.error('There was an error!', error);         
    });
  }, []);

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./user-home";
  };

  return (
    <div className="container">
      <Navbar userData = {userData}/>
      <br/>
      
      <Routes>
        <Route path="/" element={<ExercisesList userData = {userData}/>} />
        <Route path="/edit/:id" element={<EditExercise userData = {userData}/>} />
        <Route path="/create" element={<CreateExercise userData = {userData}/>} />
      </Routes>

      <button onClick={logOut}>
        Log Out
      </button>
    </div>
  );
}

export default UserHome;
