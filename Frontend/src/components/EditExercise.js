import React from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {useState, useEffect, useRef} from 'react';
import {useParams} from 'react-router-dom';

function EditExercise(props) {
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());

  const descriptionRef = useRef(null);
  const durationRef = useRef(null);

  let { id } = useParams();

  useEffect(( ) => {
    axios.get('http://localhost:5000/exercises/'+ id)
      .then(response => {
        setDescription(response.data.description);
        setDuration(response.data.duration);
        setDate(new Date(response.data.date));  
      })
      .catch(function (error) {
        console.log(error);
      })
  },[])

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
      username: props.userData.fname + " " + props.userData.lname,
      description: description,
      duration: duration,
      date: date,
      email: props.userData.email
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/update/' + id, exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  }


  return (
    <div>
      <h2>11{props.userData.email}</h2>
      <h3>{id}</h3>
      <h3>Edit Exercise Log</h3>
      <form onSubmit={onSubmit}>
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
              ref={durationRef}
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
          <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )  
}

export default EditExercise;