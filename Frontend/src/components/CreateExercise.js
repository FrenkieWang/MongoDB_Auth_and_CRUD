import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {useState, useEffect, useRef} from 'react';

function CreateExercise() {
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  const usernameRef = useRef(null);
  const descriptionRef = useRef(null);
  const durationRef = useRef(null);

  useEffect(( ) => {
    axios.get('http://localhost:5000/users/')
    .then(response => {
      if (response.data.length > 0) {
        console.log(response.data);
        setUsers(response.data.map((user) => (user.fname + " " + user.lname)));
        setUsername(response.data[0].fname + " " + response.data[0].lname);
      }
    })
    .catch((error) => {
      console.log(error);
    })
  },[])

  function onChangeUsername() {
    setUsername(usernameRef.current.value);
  }

  function onChangeDescription() {
    setDescription(descriptionRef.current.value);
  }

  function onChangeDuration() {
    setDuration(durationRef.current.value);
  }

  function onChangeDate(date) {
    setDate(date);
  }

  function onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: username,
      description: description,
      duration: duration,
      date: date
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select 
              required
              className="form-control"
              ref = {usernameRef}
              value = {username}
              onChange={onChangeUsername}>
              {
                users.map((user, index) => (
                  <option 
                    key={index}
                    value={user}>{user}
                  </option>
                ))
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              ref={descriptionRef}
              value = {description}
              onChange={onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              ref = {durationRef}
              value = {duration}
              onChange={onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={date}
              onChange={onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )  
}

export default CreateExercise;