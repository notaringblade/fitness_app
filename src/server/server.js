const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("./models/usermodel.js");
// const Workout = require('./models/workoutmodel.js')
const Workout = require("./models/workoutmodel");

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://adamrodrigues:ravenfeather777@fitness-app.ipeqlei.mongodb.net/fitness-app?retryWrites=true&w=majority"
).then(e=>{

console.log("Connected to Mongoose")
});

app.post("/api/createWorkout", async (req, res) => {
  try {
    console.log(req.body)
    console.log(typeof req.body.exercises)
    console.log( req.body.exercises)
    const workout = await Workout.create(req.body);
    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: "error", error: error });
  }
});

app.get("/api/getWorkout/:workoutName", async (req, res) => {
  try {
    console.log(Workout);
    var data = await Workout.find({ workoutName: req.params.workoutName });
    res.status(200).json(data);
  } catch (error) {}
});

app.get("/api/getWorkoutByUsername/:username", async (req, res) => {
  try {
    console.log(Workout);
    var data = await Workout.find({ username: req.params.username });
    res.status(200).json(data);
  } catch (error) {}
});

app.post("/api/register", async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: "Duplicate email" });
  }
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    username: req.body.username,
    // email : req.body.email,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        username: user.username,
      },
      user.username + user.password[3]
    );
    return res.json({ status: "ok", user: user, token: token });
  } else {
    return res.json({ status: "error", user: false });
  }
  // res.json({status: 'ok'});
});

app.get("/api/getUsers/:username", async (req, res) => {
  try {
    // console.log(Workout);
    var data = await User.find({ username: req.params.username });
    res.status(200).json(data);
  } catch (error) {}
});

app.listen(1337, () => {
  console.log("Server Started on 1337");
});
