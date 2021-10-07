const router = require("express").Router();

const {
  createThought,
  getAllThoughts,
  getThoughtById,
  updateThoughtById,
  deleteThought,
  addReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts
router.route("/").post(createThought).get(getAllThoughts);

// /api/thoughts/:thoughtId
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThoughtById)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions

router.route("/:thoughtId/reactions").post(addReaction);

module.exports = router;
