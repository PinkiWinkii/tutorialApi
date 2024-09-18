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

module.exports = {
    getAllWorkouts
};
