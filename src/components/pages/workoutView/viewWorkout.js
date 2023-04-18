import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactModal from "react-modal";

export default function ViewWorkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const userProfile = async (user) => {
    navigate("/userProfile/" + user, { state: { user: user } });
  };
  const workout = location.state.workout;
  
  return (
    <div>
      
      <div>{location.state.workout.workoutName}</div>
      <div>
        Exercises
        {(workout.excercises.length != 0 &&
          workout.excercises.map((exercise) => (
            <div>{exercise.exerciseName}</div>
          ))) || <div>Loading...</div>}
      </div>
    </div>
  );
}
