const router = require("express").Router();
const { getAllUser } = require("../../controllers/user-controller");

// /api/pizzas
router.route("/").get(getAllUser);

module.exports = router;
