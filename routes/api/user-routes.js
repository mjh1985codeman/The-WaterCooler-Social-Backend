const router = require("express").Router();

const {
  createUser,
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
  addFriend,
} = require("../../controllers/user-controller");

// /api/users
router.route("/").post(createUser).get(getAllUser);

// /api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
// POST to add a new friend to a user's friend list
// DELETE to remove a friend from a user's friend list
router.route("/:id/friends/:friendId").put(addFriend);

module.exports = router;
