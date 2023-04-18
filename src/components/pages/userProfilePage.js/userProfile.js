import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function UserProfile() {
  const location = useLocation();
  const user = location.state.user;
  const [workoutList, setWorkoutList] = useState([]);
  const navigate = useNavigate();

  const viewWorkout = (workout) => {
    navigate("/viewWorkout/" + workout, { state: { workout: workout } });
  };
  const getUserWorkout = async () => {
    const workouts = await fetch(
      "http://localhost:1337/api/getWorkoutByUsername/" + user.username
    )
      .then((resp) => resp.json())
      .then((apiData) => {
        setWorkoutList(apiData);
        console.log(apiData);
      });
  };
  useEffect(() => {
    getUserWorkout();
  }, []);

  return (
    <div>
      <div>{location.state.user.username}</div>
      <div>{user.email}</div>
      <div>
        {(workoutList.length != 0 &&
          workoutList.map((workout) => (
            <div onClick={() => viewWorkout(workout)}>
              <p key={workout._id}>{workout.workoutName}</p>
              {/* <p >{users.email}</p> */}
            </div>
          ))) || (
          <h2> This User Has No Workouts</h2>
        )}
      </div>
    </div>
  );
}
