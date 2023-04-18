const mongoose = require("mongoose");

const Workout = new mongoose.Schema(
  {
    username: { type: String, required: false, default: "null" },
    // excercises: {type: Array , required: true},
    // excercises: {type: Array , required: true},
    excercises: {
      type: [mongoose.Schema.Types.Mixed],
      required: true,
    },
    workoutName: { type: String, required: true },
  },
  { collection: "workout-data" }
);

const model = mongoose.model("WorkoutData", Workout);

module.exports = model;
