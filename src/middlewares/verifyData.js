//middlewares/verifyData.js

const verify = async (req, res, next) => {

    const { body } = req;
    if (
        !body.name ||
        !body.mode ||
        !body.equipment
    ) {
        res
        .status(400)
        .send({
            status: "FAILED",
            data: {
            error:
                "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment"
            },
        });
        return;
    }
    next();
};

const verifyId = async (req, res, next) => {
    const { workoutId } = req.params;
    if (!workoutId) {
        return res
            .status(400)
            .send({
                status: "FAILED",
                data: {
                    error: "Parameter ':workoutId' can not be empty",
                },
            });
    }
    next();
};

module.exports = { verify, verifyId };