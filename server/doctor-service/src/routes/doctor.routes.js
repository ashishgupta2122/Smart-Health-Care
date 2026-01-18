const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth.middleware');
const doctorController = require('../controllers/doctor.controller');

// 🔥 FIXED FUNCTION NAME
router.post("/", authMiddleware, doctorController.createDoctor);
router.get("/", doctorController.getAllDoctors);
router.get("/me", authMiddleware, doctorController.getMyProfile);

module.exports = router;
