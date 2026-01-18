const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");

// 🔥 THESE MUST BE FUNCTIONS
router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router; // ✅ MUST be router
