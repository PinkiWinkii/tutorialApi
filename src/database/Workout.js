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

const createNetWorkout = async (newWorkout) => {
    try
    {
        let workoutToInsert = new Workout(newWorkout);
        const createdWorkout = await workoutToInsert.save();
        return createdWorkout;
    }
    catch (error)
    {
        throw error;
    }
}

const updateOneWorkout = async (workoutId, changes) => {
    try
    {
        let updatedWorkout = await Workout.findByIdAndUpdate(workoutId,
        {$set:changes},{new:true});
        console.log(updatedWorkout);
        
        return updatedWorkout;
    }
    catch (error)
    {
        throw error;
    }
}

const deleteOneWorkout = async (workoutId) => {
    try
    {
        let deletedWorkout = await Workout.findByIdAndDelete(workoutId);
        return deletedWorkout;
    }
    catch (error)
    {
        throw error;
    }
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNetWorkout,
    updateOneWorkout,
    deleteOneWorkout
};
