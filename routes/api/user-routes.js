const router = require("express").Router();
const {
  getAllUser,
  createUser,
  getSingleUser,
  addFriend,
} = require("../../controllers/user-controller");

router.route("/").get(getAllUser).post(createUser);
router.route("/").get(getSingleUser);
router.route("/:userId/friends/:friendId").post(addFriend);

module.exports = router;
