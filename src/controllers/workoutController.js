// IN src/controllers/workoutController.js

const workoutService = require ("../services/workoutService");

const getAllWorkouts = async (req, res) => {
    try {
        const allWorkouts = await workoutService.getAllWorkouts();
        if(allWorkouts.length === 0) {
            return res.status(404).send({message: 'No existen workouts'});
        }
        res.send({status: "OK", data: allWorkouts});
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED",
                    message: "Error al realizar la petición:",
                    data: { error: error?.message || error}});
            
    }
};

const getOneWorkout = async (req, res) => {
    const {params: { workoutId }} = req;

    if (!workoutId) {
        return res
        .status(400)
        .send({
            status: "FAILED",
            data: { error: "Paremeter ':workoutId' can not be empty" },
        });
    }

    try {
        const workout = await workoutService.getOneWorkout(workoutId);
        if (!workout) {
            return res
            .status(404)
            .send({ status: "FAILED",
                data: { error: `Can't find workout with the id '${workoutId}'`} });
            }
        }
        catch (error){
            res
            .status(error?.status || 500)
            .send({ status: "FAILED",
                message: "Error al realizar la petición:",
                data: { error: error?.message || error }});
        }
    };

module.exports = {
    getAllWorkouts,
    getOneWorkout
}