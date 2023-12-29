import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserHome from "./components/UserHome";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <BrowserRouter>
      <div className="App">
        <h1>MongDB Auth+CRUD Project</h1>
        <h2>Made by <span style={{color:'blue'}}>Frenkie Wang</span></h2>
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn == "true" ? <UserHome /> : <Login />}
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/user-home/*" element={<UserHome />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
