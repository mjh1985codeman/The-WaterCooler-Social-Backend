const router = require("express").Router();

const {
  createThought,
  getAllThoughts,
  getThoughtById,
} = require("../../controllers/thought-controller");

// /api/thoughts
router.route("/").post(createThought).get(getAllThoughts);

// /api/thoughts/:thoughtId
router.route("/:id").get(getThoughtById);

module.exports = router;
