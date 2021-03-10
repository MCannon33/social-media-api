const router = require("express").Router();
const {
  getAllThoughts,
  //   addReaction,
  createThought,
} = require("../../controllers/thought-controller");

// /get thoughts and create a thought
router.route("/").get(getAllThoughts).post(createThought);

//get thoughts updates thoughts and deletes
// router
//   .route("/:ThoughtId")
//   .get(addReaction)
//   .put(addReaction)
//   .delete(deleteReaction);

module.exports = router;
