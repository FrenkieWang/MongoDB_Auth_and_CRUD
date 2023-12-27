import React, { useEffect, useState } from "react";
import axios from 'axios';

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
      // 处理错误情况
      console.error('There was an error!', error);         
    });
  }, []);

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <div>          
          Name<h1>{userData.fname} &nbsp; {userData.lname}</h1>
          Email <h1>{userData.email}</h1>
          <br />
          <button onClick={logOut} className="btn btn-primary">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserHome;
