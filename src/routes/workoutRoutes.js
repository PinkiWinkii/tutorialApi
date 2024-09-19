const express  = require("express");
const router = express.Router();
const workoutController = require("../controllers/workoutController");
const middleware = require("../middlewares/verifyData");

router.get("/", workoutController.getAllWorkouts);
router.get("/:workoutId", workoutController.getOneWorkout);

router.post("/", middleware.verify, workoutController.createdNewWorkout);

router.patch("/:workoutId", workoutController.updateOneWorkout);
router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;