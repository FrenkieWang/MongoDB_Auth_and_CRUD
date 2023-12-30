import React, {useState} from 'react';
import axios from 'axios';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function CreateExercise(props) {
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());

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
    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data));
      
    window.location = '/user-home';
  }

  return (
    <div>
      <h3>Create New Exercise Page</h3>
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
           value="Create Exercise Log"
           />
        </div>
      </form>
    </div>
  )  
}

export default CreateExercise;