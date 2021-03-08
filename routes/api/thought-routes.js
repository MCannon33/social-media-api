const router = require("express").Router();
const { getAllThoughts } = require("../../controllers/thought-controller");

// /api/pizzas
router.route("/").get(getAllThoughts);

module.exports = router;
