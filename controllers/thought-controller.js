const { Thought } = require("../models");

const ThoughtController = {
  // get all pizzas
  getAllThoughts(req, res) {
    Thought.find({})
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
};
module.exports = ThoughtController;
