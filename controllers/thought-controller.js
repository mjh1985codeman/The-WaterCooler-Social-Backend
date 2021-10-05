const { Thought, User } = require("../models");

const thoughtController = {
  // create a thought
  // create a thought works but how do I attach the thought to the user creating it?
  createThought({ body }, res) {
    Thought.create(body)
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.json(err));
  },
};

module.exports = thoughtController;
