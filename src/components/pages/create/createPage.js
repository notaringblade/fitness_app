import { Fab } from "@mui/material";
import React, { useState } from "react";
import ReactModal from "react-modal";
import { useLocation } from "react-router-dom";
import Cards from "../../cards/Cards.js";
import { Add } from "@mui/icons-material";

export default function CreatePage() {
  const [workoutName, setWorkoutName] = useState("");
  const [exerciseName, setexerciseName] = useState("");

  const [weight, setweight] = useState(0);
  const [reps, setreps] = useState(0);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const location = useLocation();
  const user = location.state.user;

  const [exerciseList, setExercseList] = useState([
    { exerciseName: "push-ups" },
  ]);

  function addExercise(event) {
    event.preventDefault();
    setExercseList([...exerciseList, { exerciseName, weight, reps }]);
    setexerciseName('');
    setweight(0);
    setreps(0);
    closeModal();
  }
  async function createWorkout(event) {
    event.preventDefault();
    if (workoutName.length != 0) {
      const response = await fetch("http://localhost:1337/api/createWorkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
          workoutName: workoutName,
          excercises: exerciseList,
        }),
      });
    } else {

    }
    // const data = await response.json();
    // console.log(data);
  }

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h1>Create your exercise</h1>
        <form onSubmit={addExercise}>
          <div>
            <label>Exercise Name</label>
            <input
              required
              onChange={(e) => setexerciseName(e.target.value)}
              value={exerciseName}
              name="Exercise Name"
              type="text"
            />
          </div>
          <div>
            <label>Weight</label>
            <input
              required
              onChange={(e) => setweight(e.target.value)}
              name="Weights"
              type="number"
              value={weight}
            />
          </div>
          <div>
            <label>Reps</label>
            <input
              required
              onChange={(e) => setreps(e.target.value)}
              value={reps}
              name="reps"
              type="number"
            />
          </div>
          <button type="submit">Add Exercise</button>
        </form>
      </ReactModal>
      <label>Workout Name</label>
      <div>
        <input
          onChange={(e) => setWorkoutName(e.target.value)}
          value={workoutName}
          type="text"
          name="workoutName"
          required
        />
      </div>
      <p onClick={openModal}>add</p>
      <div style={{ flex: 1, margin: "auto", marginLeft: "32.5%" }}>
        {exerciseList.map((e) => {
          return <Cards title={e.exerciseName} subtitle="" />;
        })}
      </div>
      {/* <p onClick={createWorkout}>save</p> */}
      <Fab
        onClick={createWorkout}
        style={{ position: "absolute", bottom: 30, right: 30 }}
        color="primary"
        aria-label="add"
      >
        <Add scale="2" />
      </Fab>
    </div>
  );
}
