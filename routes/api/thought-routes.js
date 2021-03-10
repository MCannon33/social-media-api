const router = require("express").Router();
const {
  getAllThoughts,
  //   deleteReaction,
  //   addReaction,
  createThought,
  getThoughtById,
  deleteThought,
  updateThought,
} = require("../../controllers/thought-controller");

// /get thoughts and create a thought
router.route("/").get(getAllThoughts).post(createThought);

//get thoughts updates and delete thoughts
router
  .route("/:ThoughtId")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
