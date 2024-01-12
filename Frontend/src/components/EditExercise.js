import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function EditExercise(props) {
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());

  let { id } = useParams();

  useEffect(( ) => {
    axios.get('https://mern-stack-tutorial-backend.vercel.app:5000/exercises/'+ id)
      .then(response => {
        setDescription(response.data.description);
        setDuration(response.data.duration);
        setDate(new Date(response.data.date));  
      })
      .catch(function (error) {
        console.log(error);
      })
  },[])

  function onChangeDate(date) {
    setDate(date);
  }

  function onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: props.userData.fname + " " + props.userData.lname,
      description: description,
      duration: duration,
      date: date,
      email: props.userData.email
    }

    console.log(exercise);
    axios.post('https://mern-stack-tutorial-backend.vercel.app:5000/update/' + id, exercise)
      .then(res => console.log(res.data));

    window.location = '/user-home';
  }

  return (
    <div>
      <h3>Edit Exercise Page:</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value = {description}
              onChange={(e) => setDescription(e.target.value)}
              />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value = {duration}
              onChange={(e) => setDuration(e.target.value)}
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
          <input
           type="submit"
           className="form-control"
           value="Edit Exercise Log"
          />
        </div>
      </form>
    </div>
  )  
}

export default EditExercise;