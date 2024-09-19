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
    const { workoutId } = req.params; // Simplificado

    if (!workoutId) {
        return res
        .status(400)
        .send({
            status: "FAILED",
            data: { error: "Parameter ':workoutId' cannot be empty" },
        });
    }

    try {
        const workout = await workoutService.getOneWorkout(workoutId);
        if (!workout) {
            return res
            .status(404)
            .send({ status: "FAILED" ,
                    data: { error: `Can't find workout with the id '${workoutId}'`} }); // Arreglado aquí
        }
        
        res.send( { status: "OK", data: workout});
    }
    catch (error){
        res
        .status(error?.status || 500)
        .send({ status: "FAILED",
                message: "Error al realizar la petición",
                data: { error: error?.message || error}});
    }
};

const createdNewWorkout = async (req, res) => {
    const { body } = req;

    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment
    };

    try {
        const createdWorkout = await workoutService.createdNewWorkout(newWorkout);
        res.status(201).send( { status: "OK", data: createdWorkout });
    }
    catch
    {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED",
                message: "Error al realizar la petición",
                data: { error: error?.message || error }});
    }
};

const updateOneWorkout = async (req, res) => {
    const {
        body,
        params: { workoutId },
    } = req;

    if (!workoutId) {
        return res
        .status(400)
        .send({
            status: "FAILED",
            data: { error: "Parameter: 'workoutId' can not be empty"},
        });
    }

    try {
        const updatedWorkout = await workoutService.updateOneWorkout(workoutId, body);

        if (!updatedWorkout) {
            return res
            .status(404)
            .send({ status: "FAILED",
                    data: { error: `Can't find workout with the id '${workoutId}'`}});
        }

        res.send({ status: "OK", data: updatedWorkout });
    }
    catch (error)
    {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED",
                message: "Error al realizar la petición",
                data: { error: error?.mesage || error }});
    }
}

const deleteOneWorkout = async (req, res) => {
    const { params: { workoutId }} = req;

    if (!workoutId) {
        return res
        .status(400)
        .send({
            status: "FAILED",
            data: { error: "Parameter ':workoutId' can not be empty" },
        });
    }

    try
    {
        const deletedWorkout = await workoutService.deleteOneWorkout(workoutId);

        if (!deletedWorkout) {
            return res
            .status(404)
            .send({ status: "FAILED",
                    data: { error: `Can't find workout with the id '${workoutId}'`}});
        }

        res.status(200).send({ status: "OK", data: deletedWorkout });
    }
    catch (error)
    {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED",
                message: "Error al realizar la petición",
                data: { error: error?.message || error }});
    }
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createdNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}