const express = require("express");
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/userController");

const router = express.Router();

// Get all users
router.get("/", getUsers);

// Get single user
router.get("/:id", getUser);

// Create new user
router.post("/", createUser);

// Update user
router.put("/:id", updateUser);

// Delete user
router.delete("/:id", deleteUser);

module.exports = router;
