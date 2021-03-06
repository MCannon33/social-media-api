const { User } = require("..models");

const UserController = {
  // get all pizzas
  getAllUser(req, res) {
    User.find({})
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
};
module.exports = UserController;
