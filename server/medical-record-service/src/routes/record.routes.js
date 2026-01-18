const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");
const recordController = require("../controllers/record.controller");

// Create medical record (Doctor)
router.post("/", authMiddleware, recordController.createRecord);

// My records (Patient)
router.get("/me", authMiddleware, recordController.getMyRecords);

// Patient records (Doctor)
router.get(
    "/patient/:patientId",
    authMiddleware,
    recordController.getPatientRecords
);

module.exports = router;
