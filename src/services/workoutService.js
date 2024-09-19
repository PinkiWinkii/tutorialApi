// In src/services/workoutService.js

const Workout = require("../database/Workout");

const getAllWorkouts = async () => {
    try 
    {
        const allWorkouts = await Workout.getAllWorkouts(); // Añadir await aquí
        return allWorkouts;
    } 
    catch (error) 
    {
        throw error;
    }
};

const getOneWorkout = async (workoutId) => {
    try
    {
        const workout = await Workout.getOneWorkout(workoutId);
        return workout;
    }
    catch (error)
    {
        throw error;
    }
}

const createdNewWorkout = async (newWorkout) => {
    try
    {
        const createdWorkout = Workout.createNetWorkout(newWorkout);
        return createdWorkout;
    }
    catch (error)
    {
        throw error;
    }
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createdNewWorkout
};
