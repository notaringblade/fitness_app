const mongoose = require('mongoose');

const Exercise = new mongoose.Schema(
    {
        exerciseName: {type: String, required: true},
        reps: {type: Number, required: true},
        weight: {type: Number, required: true}
    },
    {collection: 'user-data'}
)

const model = mongoose.model('ExerciseData', Exercise)

module.exports = model;