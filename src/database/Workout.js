// In src/database/Workout.js

const Workout = require('../models/workoutModel');

const getAllWorkouts = async () => {
    try {
        const workouts = await Workout.findById();
        return workouts;
    } catch (error) {
        throw error;
    }
};

const getOneWorkout = async (workoutId) => {
    try {
        const workouts = await Workout.findById(workoutId);
        return workouts;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllWorkouts,
    getOneWorkout
};
