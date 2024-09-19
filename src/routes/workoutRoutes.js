const express  = require("express");
const router = express.Router();
const workoutController = require("../controllers/workoutController");
const middleware = require("../middlewares/verifyData");

router.get("/", middleware.verify, workoutController.getAllWorkouts);
router.get("/:workoutId", middleware.verifyId, workoutController.getOneWorkout);

router.post("/", middleware.verify, workoutController.createdNewWorkout);

router.patch("/:workoutId", middleware.verifyId, workoutController.updateOneWorkout);
router.delete("/:workoutId", middleware.verifyId, workoutController.deleteOneWorkout);

module.exports = router;