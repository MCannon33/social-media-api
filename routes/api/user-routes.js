const router = require("express").Router();
const {
  getAllUser,
  createUser,
  addFriend,
} = require("../../controllers/user-controller");

router.route("/").get(getAllUser).post(createUser);
router.route("/:userId/friends/:friendId").post(addFriend);

module.exports = router;
