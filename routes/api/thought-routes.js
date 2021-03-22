const router = require("express").Router();

const {
  getAllThoughts,
  //   deleteReaction,
  //   addReaction,
  createThought,
  getThoughtById,
  deleteThought,
  updateThought,
  addReaction,
} = require("../../controllers/thought-controller");

// /get thoughts and create a thought
router.route("/").get(getAllThoughts).post(createThought);

//get thoughts updates and delete thoughts
router
  .route("/:ThoughtId")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:ThoughtId/reactions").post(addReaction);

module.exports = router;
