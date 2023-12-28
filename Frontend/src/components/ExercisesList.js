import React from 'react';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ExercisesList(props){
  const [exercises, setExercises] = useState([]);

  useEffect(( ) => {
    axios.get('http://localhost:5000/exercises/')
    .then(response => {
      setExercises(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [exercises]);

  function deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(response => { console.log(response.data)});

    setExercises(exercises.filter(el => el._id !== id));
  }

  function currentUserEmail(){
    return function (exerciseObject){
      return exerciseObject.email === props.userData.email;
    }
  }

  return (
    <div>
      <h3>Exercises List Page: </h3>
      <table className="table" border="2">
        <thead>
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercises.filter(currentUserEmail()).map(currentexercise =>(
            <tr key = {currentexercise._id}>
              <td>{currentexercise.username}</td>
              <td>{currentexercise.description}</td>
              <td>{currentexercise.duration}</td>
              <td>{currentexercise.date.substring(0,10)}</td>
              <td>
                <Link to={"/user-home/edit/"+currentexercise._id}>edit</Link> | 
                <a href="#" onClick={() => {deleteExercise(currentexercise._id) }}>delete</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )  
}

export default ExercisesList;