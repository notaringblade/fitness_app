import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cards from "../../cards/Cards";
import "./searchResults.css";
// import { useLocation } from 'react-router-dom'

export default function SearchResult() {
  const [usersList, setUsersList] = useState([]);
  const [workoutList, setWorkoutList] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const viewWorkout = (workout) => {
    navigate("/viewWorkout/" + workout, { state: { workout: workout } });
  };
  const userProfile = (user) => {
    navigate("/userProfile/" + user, { state: { user: user } });
  };

  const fetchUsers = async () => {
    const users = await fetch(
      "http://localhost:1337/api/getUsers/" + location.state.query
    )
      .then((resp) => resp.json())
      .then((apiData) => {
        setUsersList(apiData);
      });

    const workouts = await fetch(
      "http://localhost:1337/api/getWorkout/" + location.state.query
    )
      .then((resp) => resp.json())
      .then((apiData) => {
        setWorkoutList(apiData);
      });
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <div>
        <h3>Users:</h3>
        {(usersList.length != 0 &&
          usersList.map((users) => (
            <div onClick={() => userProfile(users)}>
              <Cards title={users.username} subtitle={users.email} />
            </div>
          ))) || <h1>No Users with the username '{location.state.query}'</h1>}
      </div>

        <h3>Workouts:</h3>
        
      <div className="workout-results">
        {(workoutList.length != 0 &&
          workoutList.map((workout) => (
            <div>
              <div onClick={() => viewWorkout(workout)}>
                <Cards
                  title={workout.workoutName}
                  subtitle={workout.username}
                />
              </div>
            </div>
          ))) || (
          <h2> No Workouts match the search term '{location.state.query}'</h2>
        )}
      </div>
    </div>
  );
}
