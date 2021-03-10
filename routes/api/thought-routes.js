const router = require("express").Router();
const { getAllThoughts } = require("../../controllers/thought-controller");

// /api/pizzas
router.route("/").get(getAllThoughts);

router.route("/:ThoughtId/reaction/").put(addReaction);

module.exports = router;
