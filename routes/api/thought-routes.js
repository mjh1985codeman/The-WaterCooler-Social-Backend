const router = require("express").Router();

const {
  createThought,
  getAllThoughts,
  getThoughtById,
  updateThoughtById,
  deleteThought,
  addReaction,
  deleteReaction,
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

router.route("/:id/reactions").post(addReaction).delete(deleteReaction);

module.exports = router;
