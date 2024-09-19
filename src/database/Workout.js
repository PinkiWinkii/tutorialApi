// In src/database/Workout.js

const Workout = require('../models/workoutModel');

const getAllWorkouts = async () => {
    try {
        const workouts = await Workout.find(); // Cambiado .toArray() por .exec()
        return workouts;
    } catch (error) {
        throw error;
    }
};

const getOneWorkout = async (workoutId) => {
    try
    {
        const workout = await Workout.findById(workoutId);
        return workout;
    }
    catch (error)
    {
        throw error;
    }
}

module.exports = {
    getAllWorkouts,
    getOneWorkout
};
