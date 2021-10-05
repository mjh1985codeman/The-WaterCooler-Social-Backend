const router = require("express").Router();

const { createUser } = require("../../controllers/user-controller");

// /api/user
router.route("/").post(createUser);

module.exports = router;
